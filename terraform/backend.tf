# Comment out the backend code to start with a local backend so terraform can create the s3 and dynamodb table required by the backend first

terraform {
  backend "s3" {
    region  = "eu-west-2"
    encrypt = true
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket        = "sargalias-microfrontends-example-tfstate"
  force_destroy = true
}

resource "aws_s3_bucket_versioning" "versioning_terraform_state" {
  bucket = aws_s3_bucket.terraform_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_dynamodb_table" "terraform_locks" {
  name           = "microfrontends_example_terraform_locks"
  hash_key       = "LockID"
  read_capacity  = 1
  write_capacity = 1

  attribute {
    name = "LockID"
    type = "S"
  }
}


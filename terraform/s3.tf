resource "aws_s3_bucket" "app_files" {
  bucket        = "sargalias-microfrontends-example-files"
  force_destroy = true
}

resource "aws_s3_bucket_policy" "microfrontends_example_files_cloudfront_access" {
  bucket = aws_s3_bucket.app_files.id
  policy = jsonencode({
    Version = "2012-10-17",
    Id      = "PolicyForMicrofrontendsExampleFilesCloudfrontAccess"
    Statement = [
      {
        Sid    = "ForMicrofrontendsExampleFilesCloudfrontAccess",
        Effect = "Allow",
        Principal = {
          Service = "cloudfront.amazonaws.com"
        },
        Action   = "s3:GetObject",
        Resource = "${aws_s3_bucket.app_files.arn}/*",
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.microfrontends_example_oac.arn
          }
        }
      }
    ]
  })
}

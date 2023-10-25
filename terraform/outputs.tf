output "s3_bucket_name" {
  value     = aws_s3_bucket.app_files.id
  sensitive = true
}

output "cloudfront_distribution_id" {
  value     = aws_cloudfront_distribution.microfrontends_example_oac.id
  sensitive = true
}

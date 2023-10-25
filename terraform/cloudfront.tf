locals {
  origin_id = "microfrontends_example_s3_origin"
}

resource "aws_cloudfront_distribution" "microfrontends_example_oac" {
  origin {
    domain_name              = aws_s3_bucket.app_files.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.microfrontends_example_oac.id
    origin_id                = local.origin_id
  }

  enabled             = true
  default_root_object = "/container/latest/index.html"

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/container/latest/index.html"
  }

  default_cache_behavior {
    cache_policy_id  = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.origin_id

    compress               = true
    viewer_protocol_policy = "https-only"
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE"]
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_control" "microfrontends_example_oac" {
  name                              = "microfrontends_example_oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

module "iam_github_oidc_role" {
  source = "terraform-aws-modules/iam/aws//modules/iam-github-oidc-role"

  name                  = "github_actions_microfrontends_example"
  force_detach_policies = true

  subjects = ["repo:sargalias/microfrontends-example:ref:refs/heads/main"]
  policies = {
    AdministratorAccess = "arn:aws:iam::aws:policy/AdministratorAccess"
  }
}


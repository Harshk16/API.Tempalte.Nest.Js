AI Usage Policy
Status: Draft — requires engineering and security approval
Scope: All developers and AI coding tools used on this project
1. Approved tools
- Use only AI tools approved by the organization.
- Follow organizational data-handling, retention, and access policies.
2. Source code and data
- Never share credentials, access tokens, private keys, or production secrets with AI tools.
- Do not submit customer data, personal data, or confidential documents to unapproved services.
- Grant AI tools only the repository and system access needed for the task.
3. AI-generated changes
- Developers remain accountable for code they submit, including AI-generated changes.
- Changes must follow docs/architecture/ and docs/standards/ where those documents exist.
- Inspect generated code for correctness, maintainability, licensing concerns, and security risks.
4. Code review
- AI review is advisory; it does not replace required human approval.
- Reviewers must verify findings against actual code and report actionable issues with file references.
- Investigate critical security findings before merging.
5. Quality gates
- AI-assisted changes must pass the same build, lint, tests, architecture checks, and security scans as other changes.
- Never claim a check passed unless it was executed and its result recorded.
- Do not bypass failing checks without an approved exception.
6. Agent permissions
- Require explicit authorization before agents deploy, modify production resources, delete data, or change infrastructure.
- Do not allow automatic commits, pushes, or merges unless the approved workflow explicitly permits them.
- Use least-privilege credentials and avoid unattended access to sensitive systems.
7. Ownership and exceptions
- The author owns the change; designated reviewers approve it under repository rules.
- Engineering leads maintain coding and architecture standards.
- Security owners approve AI tools and data-handling exceptions.
- Document policy exceptions with an owner, reason, and expiration date.
8. Enforcement
- Reference this policy from AGENTS.md for compatible AI agents.
- Enforce objective rules through CI, branch protection, secret scanning, and required reviews.
- Review this policy periodically as tools and organizational requirements change.
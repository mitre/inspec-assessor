Using InSpec for Security Assessments
1. Identify your stack of components for the system you are assessing (i.e., Cloud Services, Virtualization Platforms, Operating Systems, Databases, Application Logic, and Web Servers)
2. Identify which profiles match these components at https://saf.cms.gov/#/validate
3. Review the READMEs for each profile for specific run instructions
4. Decide the most appropriate way to set up your InSpec runner for your assessment https://saf.mitre.org/#/faq#runners
5. Example running an InSpec profile directly from Github
6. Example running an InSpec profile using a local archive (for air-gapped target systems)
7. Using an --input-file to tailor specifics
8. Understanding many ways of installing/staging InSpec, depending on your assessment restrictions
9. Advanced - running InSpec against
  a. containers (docker transport)
  b. AWS EC2s using SSM transport
  c. AWS RDS ("hostless") databases
# AI Development Rules

Before making any code changes:

1. Analyze actual files on disk.
2. Never assume files exist.
3. Never claim PASS unless verified.
4. Verify generated files physically exist.
5. Verify npm run lint passes.
6. Verify npm run build passes.

Output:

* Files created
* Files modified
* Files deleted

After implementation:

Provide a verification checklist.

Never generate dealership features unless explicitly requested.

Current priority:
Authentication System.

## Git Safety Rule

Before any git operation:

* Never automatically push code to GitHub.
* Never automatically commit code.
* Never automatically merge branches.
* Never automatically deploy to VPS.

After completing a task:

1. Run verification:

   * npm run lint
   * npm run build

2. Verify actual files exist on disk.

3. Output:
   PASS / FAIL for:

   * Build
   * Lint
   * File creation
   * Route creation
   * Database changes

4. Show all changed files.

5. Ask for explicit approval:

   "Changes verified successfully.

   Files changed:
   [list files]

   Build: PASS/FAIL
   Lint: PASS/FAIL

   Do you want me to:
   A) Stop here
   B) Commit locally only
   C) Commit and push to GitHub"

6. Wait for user approval before any git commit or push.

Never push automatically.
Never deploy automatically.
Always require explicit approval.

import React from "react";
import {
  FaDownload,
  FaCheckCircle,
  FaGithub,
  FaGitAlt,
  FaCodeBranch,
  FaUsers,
  FaClipboardList,
  FaFolderPlus,
  FaSyncAlt,
  FaUpload,
  FaPenFancy,
  FaArrowCircleRight,
  FaUndo,
  FaArchive,
} from "react-icons/fa";
import "./GitGuide.css";
import vslogo from "../assets/vslogo.png";
import CarouselComponent from "./Carousel_Component";
import CarouselComponentCG from "./Carousel_ComponentCG";
import CarouselComponentCR from "./Carousel_ComponentCR";
import CarouselComponentPR from "./Carousel_ComponentPR";
import CarouselComponentWB from "./Carousel_ComponentWB";
import CarouselComponentCT from "./Carousel_ComponentCT";
import CarouselComponentDPD from "./Carousel_ComponentDPD";
import CarouselComponentDA from "./Carousel_ComponentDA";
import CarouselComponentPA from "./Carousel_ComponentPA";
import CarouselComponentMC from "./Carousel_ComponentMC";
import CarouselComponentRC from "./Carousel_ComponentRC";
import CarouselComponentGST from "./Carousel_ComponentGST";

// Placeholder images URLs (replace with your own images or local imports)
const gitLogo =
  "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png";
const githubLogo =
  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
const vsLogo =
  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_Visual_Studio_2022_logo.svg";

export default function GitGuide() {
  return (
    <div className="guide-wrapper">
      <div className="guide-container">
        <h1>
          <FaGitAlt className="icon" /> Git and GitHub: Installation, Setup, and
          Workflow Guide
        </h1>
        <p className="credits">
          <em>
            Prepared by: Yuvaraj Mareeswaran <br />
            Reviewed by: Suja Kanakaraj
          </em>
        </p>

        <h2>
          <FaClipboardList className="icon" /> Overview
        </h2>
        <p>
          This document provides a comprehensive guide to installing and setting
          up Git and GitHub for version control. It also outlines the workflow
          for daily development activities, collaboration with team members, and
          best practices for pushing changes to the main repository.
        </p>
        <p style={{ color: "#7bff00" }}>
          <strong>
            Each step provides clear guidance through a reference image
            carousel, making it one of the easiest ways to add your project to
            Git.
          </strong>
        </p>

        <h2>
          <FaDownload className="icon" /> Steps in Installing Git on Windows
        </h2>
        <ol>
          <li>
            <b>
              <FaDownload /> Download Git:
            </b>
            <br />
            Visit{" "}
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              https://git-scm.com/downloads
            </a>
            .<br />
            <img src={gitLogo} alt="Git Logo" className="inline-image" />
            <br />
            Click on the Windows button to download the installer.
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Run the Installer:
            </b>
            <br />
            Double-click the downloaded file (e.g., Git-2.xx.x-64-bit.exe).
            <br />
            Follow the on-screen instructions, keeping default settings unless
            specified otherwise.
            <br />
            Click "Next" until the installation completes, then click "Finish."
          </li>
          <li>
            <b>
              <FaCheckCircle /> Verify Installation:
            </b>
            <br />
            Open Command Prompt and run <code className="cmd">git</code>.<br />A
            list of Git commands will appear if the installation is successful.
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponent />
          </li>
        </ol>

        <h2>
          <FaGithub className="icon" /> Creating an Account on GitHub
        </h2>
        <ol>
          <li>
            <b>
              <FaGithub /> Navigate to GitHub:
            </b>
            <br />
            Go to{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              https://github.com
            </a>
            .<br />
            <img src={githubLogo} alt="GitHub Logo" className="inline-image" />
            <br />
            Click "Sign up" and follow the prompts to create a free account.
          </li>
          <li>
            <b>
              <FaCheckCircle /> Verify Email:
            </b>
            <br />
            Check your email for a verification link from GitHub.
            <br />
            Click the link to verify your account.
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentCG />
          </li>
        </ol>

        <h2>
          <FaFolderPlus className="icon" /> Creating a Repository
        </h2>
        <ol>
          <li>
            <b>
              <FaGithub /> Log in to your GitHub account.:
            </b>
            <br />
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                https://github.com
              </a>
            </a>
          </li>
          <li>
            <b>
              <FaFolderPlus /> Create a New Repository:
            </b>
            <br />
            Click the "+" icon in the top-right corner and select "New
            Repository."
            <br />
            Enter a meaningful name (e.g., "MyProject").
            <br />
            Choose between "Public" or "Private."
            <br />
            Optionally, add a README file.
            <br />
            Click "Create repository."
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentCR />
          </li>
        </ol>

        <h2>
          <FaUpload className="icon" /> Push Solution to Repository
        </h2>
        <ol>
          <li>
            <b>
              <FaCodeBranch /> Clone the Repository:
            </b>
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Open GitHub, navigate to your repository, and copy the HTTPS
                URL.
              </li>
              <li>
                Open Visual Studio, click "Clone a Repository," and paste the
                URL.
              </li>
              <li>Paste the copied URL in the repository location.</li>
              <li>
                Once the solution is cloned, Visual Studio opens a blank
                solution.
              </li>
              <li>
                The bottom of the IDE shows the branch <b>(main)</b> and
                repository name <b>(MyProject)</b>.
              </li>
              <li>Close Visual Studio.</li>
              <li>
                Navigate to the location where a blank clone solution was
                created.
              </li>
              <li>
                Delete <code className="cmd">.vs</code> folder.
              </li>
              <li>Create a new folder and rename it.</li>
              <li>
                Copy all the contents (except <code className="cmd">.vs</code>)
                of the existing solution.
              </li>
              <li>
                Paste the content in the newly created folder (inside the New
                Folder).
              </li>
              <li>
                Add the <code className="cmd">gitignore</code> file to the
                solution.
              </li>
              <li>
                Rename <code className="cmd">gitignore</code> to{" "}
                <code className="cmd">.gitignore</code> (if needed).
              </li>
              <li>
                These frameworks/tools generate a .gitignore automatically
                during project creation:
              </li>
              <ul>
                <li>
                  🖌️ <strong>Frontend Frameworks</strong>
                  <ul>
                    <li>✅ React (create-react-app)</li>
                    <li>✅ Next.js (npx create-next-app)</li>
                    <li>✅ Angular CLI</li>
                    <li>✅ Vue CLI (vue create)</li>
                    <li>✅ SvelteKit</li>
                  </ul>
                </li>
                <li>
                  🖥️ <strong>Backend Frameworks</strong>
                  <ul>
                    <li>✅ Node.js (Express, NestJS, Fastify)</li>
                    <li>✅ Django (django-admin startproject)</li>
                    <li>✅ Ruby on Rails</li>
                    <li>✅ Laravel (PHP)</li>
                    <li>✅ ASP.NET Core</li>
                    <li>✅ Spring Boot (Spring Initializr)</li>
                    <li>✅ Flask (cookiecutter templates)</li>
                  </ul>
                </li>
                <li>
                  📱 <strong>Mobile Frameworks</strong>
                  <ul>
                    <li>✅ React Native (npx react-native init)</li>
                    <li>✅ Flutter (flutter create)</li>
                    <li>✅ Expo</li>
                    <li>✅ Android Studio (Java/Kotlin)</li>
                    <li>✅ Xcode (Objective-C/Swift)</li>
                  </ul>
                </li>
                <li>
                  🎮 <strong>Game Development</strong>
                  <ul>
                    <li>✅ Unity</li>
                    <li>✅ Unreal Engine</li>
                  </ul>
                </li>
                <li>
                  ⚙️ <strong>Other Tools</strong>
                  <ul>
                    <li>✅ Visual Studio Projects (.NET, C#, F#)</li>
                    <li>✅ GitHub Actions workflows</li>
                    <li>✅ Terraform</li>
                    <li>✅ Hugo (static sites)</li>
                    <li>✅ Jekyll (GitHub Pages)</li>
                    <li>✅ LaTeX</li>
                    <li>✅ Python (pipenv/poetry templates)</li>
                  </ul>
                </li>
              </ul>

              <li>
                <a
                  href="/GitManual/Gitignore_Templates.zip"
                  download
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#1d4ed8",
                    fontWeight: "500",
                  }}
                >
                  <FaDownload style={{ color: "#7bff00", fontSize: "18px" }} />
                  Download <code>.gitignore</code> ZIP, make changes if you
                  want.
                </a>
              </li>

              <li>Open the solution from the newly created folder.</li>
            </ul>
          </li>
          <li>
            <b>
              <FaPenFancy /> Add and Commit Changes:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>Make changes to your local files.</li>
              <li>
                The letter “A” next to each component implies a new change is
                ready to be pushed to main repository. In Visual Studio,
                navigate to "Git Changes," click "+" to stage changes, and enter
                a commit message.
              </li>
              <li>
                Enter a meaningful message , Click "Commit Staged" to save
                changes locally.
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaUpload /> Push Changes to GitHub:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Click "Push" to upload changes to the main branch. The system
                will not prompt to enter message for the first time. If second
                time, enter some meaningful message and click “Commit All”
              </li>
              <li>Refresh GitHub to see the updated repository.</li>
            </ul>
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentPR />
          </li>
        </ol>

        <h2>
          <FaCodeBranch className="icon" /> Creating a Working Branch
        </h2>
        <ol>
          <li>
            <b>
              <FaCodeBranch /> Switch to Main Branch:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>In Visual Studio, ensure you are on the "main" branch.</li>
              <li>In the solution file, click main branch.</li>
              <li> Click “New Branch” in the window that opens up.</li>
            </ul>
          </li>
          <li>
            <b>
              <FaCodeBranch /> Create a New Branch:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Click "New Branch," give it a name (e.g., "feature-branch"), and
                click "Create."
              </li>
              <li>
                Make changes in this branch to avoid disrupting the main branch.
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentWB />
          </li>
        </ol>

        <h2>
          <FaUsers className="icon" /> Collaborate with Team Members
        </h2>
        <ol>
          <li>
            <b>
              <FaUsers /> Add Collaborators:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>Navigate to your repository on GitHub.</li>
              <li>Go to "Settings" &gt; "Collaborators" &gt; "Add People."</li>
              <li>Enter the GitHub username of the team member and confirm.</li>
            </ul>
          </li>
          <li>
            <b>
              <FaCheckCircle /> Accept Invitation:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                The collaborator will receive an email invitation to join the
                repository.
              </li>
              <li>Once accepted, they can clone, push, and pull changes.</li>
            </ul>
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentCT />
          </li>
        </ol>

        <h2>
          <FaSyncAlt className="icon" /> Daily Pre-Development Checklist –
          Environment Setup
        </h2>
        <ol>
          <li>
            <b>
              <FaSyncAlt /> Fetch and Pull Latest Changes:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>Open your Visual Studio solution.</li>
              <li>
                Switch to the "main" branch and click "Fetch" and "Pull" to
                update your local copy.
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaSyncAlt /> Sync Working Branch:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>Switch to your working branch.</li>
              <li>
                Click the three dots (…) in the right corner and select “Open in
                Command Prompt”
              </li>
              <li>Open Command Prompt from Visual Studio and run:</li>
              <pre>git pull origin main</pre>
              <li>
                This command pulls the latest changes from the main branch into
                your current working branch.
              </li>
              <li>Resolve any conflicts if prompted.</li>
            </ul>
          </li>
          <li>
            <b>
              <FaCheckCircle /> Check for Updates:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Click "View All Commits" and ensure your branch is up to date.
              </li>
              <li>Click “Sync” if shown on the IDE of working branch.</li>
              <li>
                <code className="cmd">
                  ** Note: Sync should never be applied on main branch.
                </code>
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaPenFancy /> Important Notes:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                If your branch is up to date, the message 'Already up to date'
                will appear.
              </li>
              <li>If there are updates, they will be pulled automatically.</li>
              <li>
                If there are conflicts, Git will prompt you to resolve them.
              </li>
              <li>
                If a merge is required, Git will request a merge commit message.
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentDPD />
          </li>
        </ol>

        <h2>
          <FaPenFancy className="icon" /> Development Activity
        </h2>
        <ol>
          <li>
            <b>
              <FaPenFancy /> Make Changes:
            </b>
            <br />
            Ensure you are on the working branch.
            <br />
            Modify files as needed.
          </li>
          <li>
            <b>
              <FaPenFancy /> Stage and Commit Changes:
            </b>
            <br />
            Navigate to "Git Changes" in Visual Studio.
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>M – Modified file</li>
              <li>D – Deleted file</li>
              <li>A – Added file</li>
            </ul>
            Stage changes by clicking "+" and enter a descriptive commit
            message.
            <br />
            Click "Commit Staged" to save changes locally.
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentDA />
          </li>
        </ol>

        <h2>
          <FaUpload className="icon" /> Post Activity to Push Changes to Main
        </h2>
        <h2>
          <FaClipboardList className="icon" /> Overview
        </h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li>Repeat Fetch and Pull Before Final Commit</li>
          <li>
            Before committing the final changes, ensure your branch has the
            latest updates from main. This helps avoid merge conflicts with
            changes from other team members.
          </li>
          <li>In the Git Changes window, review your changes.</li>
          <li>
            Add a clear and descriptive commit message, then click Commit All.
          </li>
          <li>
            After committing, click Push to send your changes to the remote
            repository.
          </li>
          <li>
            Go to GitHub and create a Pull Request (PR), if needed, from your
            working branch to the main branch.
          </li>
          <li>After review and approval, merge the PR into the main branch.</li>
        </ul>
        <ol>
          <li>
            <b>
              <FaSyncAlt /> Fetch and Pull Again:
            </b>
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Before finalizing, ensure your branch has the latest updates
                from "main."
              </li>
              <li>
                Switch to working branch and click on three dots … and pick Open
                in command prompt.
              </li>
              <li>
                Type “git pull origin main” in the command prompt and press
                Enter.
              </li>
            </ul>
          </li>
          <b>
            <FaPenFancy /> Important Notes:
          </b>
          <br />
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>It shows the solution is upto date.</li>
            <li>
              If your branch is up to date, the message 'Already up to date'
              will appear.
            </li>
            <li>If there are updates, they will be pulled automatically.</li>
            <li>
              If there are conflicts, Git will prompt you to resolve them.
            </li>
            <li>
              If a merge is required, Git will request a merge commit message.
            </li>
            <li>
              Complete the merge if required and proceed with the development
              work.
            </li>
            <li>Close the command prompt.</li>
          </ul>
          <li>
            <b>
              <FaUpload /> Push Changes:
            </b>
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                {" "}
                Click “Push” to send the changes from working branch to main
                branch.
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaCodeBranch /> Create a Pull Request (PR):
            </b>
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                {" "}
                Go to GitHub, navigate to your repository, and click "Compare &
                pull request."
              </li>
              <li>
                Enter a title and description, then click "Create pull request."
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaCheckCircle /> Merge PR:
            </b>
            <br />
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Review the PR and click "Merge pull request" if there are no
                conflicts.
              </li>
              <li>
                Otherwise review with concerned team members before merging to
                the main branch.
              </li>
              <li>Confirm the merge to update the main branch.</li>
              <li>
                All the messages/ title entered will be saved for the version of
                checkin into GitHub.
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentPA />
          </li>
        </ol>

        <h2>
          <FaCodeBranch className="icon" /> Merge Message
        </h2>
        <ol>
          <p style={{ color: "#7bff00" }}>
            <strong>
              Sometimes you get a merge message without conflicts because:
            </strong>
          </p>
          <b>
            <FaSyncAlt /> Git automatically combines the changes from both
            branches when :
          </b>
          <ul
            ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              color: "#7bff00",
            }}
          >
            <li>The files modified in each branch do not overlap, or</li>
            <li>The changes are in different lines of the same file.</li>
          </ul>
          <b>
            <FaSyncAlt /> In this case, Git completes the merge automatically,
            but it still creates a merge commit message to record that :
          </b>
          <ul
            ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              color: "#7bff00",
            }}
          >
            <li>Give a meaningful message, Click Commit Staged</li>
          </ul>
        </ol>

        <h2>
          <FaCodeBranch className="icon" /> Merge Conflicts
        </h2>
        <ol>
          <p style={{ color: "#7bff00" }}>
            <strong>
              We perform merges primarily for two reasons:-
              <br></br>
              To keep our branch up to date and to prevent conflicts later.
            </strong>
          </p>
          <li>
            <b>
              <FaSyncAlt /> After pulled the updated changes from remote to your
              working branch:
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                You and your teammate edited the same file/project on different
                branches.
              </li>
              <li>You push your changes.</li>
              <li>Your teammate also pushed different changes.</li>
              <li>
                When you pull from the remote, if Git cannot auto-resolve
                changes, you get a merge conflict.
              </li>
              <li>
                At that time, it prompts you to merge the changes manually.
              </li>
            </ul>
          </li>
          <b>
            <FaPenFancy /> Here the following steps:
          </b>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>
              The Git Changes window shows a list of files with conflicts under
              Unmerged Changes . To start resolving conflicts, double-click a
              file. Or if you have a file with conflicts opened in the editor,
              you can select Open Merge Editor .
            </li>
            <li>
              In Merge Editor, start resolving your conflict by using any of the
              following methods
            </li>
            <p style={{ color: "#7bff00" }}>
              <strong>
                1. Go over your conflicts line by line, and choose between
                keeping the right or the left side by selecting the checkboxes.
              </strong>
            </p>
            <p style={{ color: "#7bff00" }}>
              <strong>
                2. Select the Take Incoming button (or press F10 ) to accept all
                the incoming changes, or Take Current button (or press F11) to
                keep your current version of all conflicting changes. You can do
                the same thing by selecting one of the checkboxes at the top of
                either side-by-side frame.{" "}
              </strong>
            </p>
            <p style={{ color: "#7bff00" }}>
              <strong>3. Manually edit your code in the Result window.</strong>
            </p>
            <li>
              When you're done resolving the merge conflicts, select Accept
              Merge . Repeat this process for all conflicting files.
            </li>
            <li>
              Use the Git Changes window to create a merge commit and resolve
              the conflict.
            </li>
          </ul>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentMC />
          </li>
        </ol>

        <h2>
          <FaUndo className="icon" /> How to Revert the changes
        </h2>
        <ol>
          <li>
            <b>
              <FaSyncAlt /> Open Git Bash :- Change your directory to your
              project folder - cd path/to/your/project
            </b>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                Step 1 : Make sure you're in the main branch - git checkout main
              </li>
              <li>
                Step 2 : Pull the latest changes (optional but recommended) -
                git pull origin main
              </li>
              <li>
                Step 3 : Revert the merge pull request (For Example) - git
                revert -m 1 f2ac29a,<br></br>
                Revert just Commit : (For Example) - git revert 9c3b0c6
              </li>
              <li>
                Step 4: Confirm commit message (For Example) - Revert
                "Commit_25_Core_CavityInsert_Yelowclr...", OR<br></br>
                if you want to Skip commit message prompts, use a code like this
                - git revert --no-edit -m 1 f2ac29a -m 1 abc1234 -m 1 def5678
              </li>
              <li>
                Step 5: Push the revert to remote (GitHub) - git push origin
                main
              </li>
            </ul>
          </li>
          <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentRC />
          </li>
        </ol>

        <h2>
          <FaArchive className="icon" /> Git Stash
        </h2>
        <ol>
          <p style={{ color: "#7bff00" }}>
            <strong>
              Git stash temporarily shelves (or stashes) changes you've made to
              your working copy so you can work on something else, and then come
              back and re-apply them later on. Stashing is handy if you need to
              quickly switch context and work on something else, but you're
              mid-way through a code change and aren't quite ready to commit.
            </strong>
          </p>
          <li>Go to Git changes window Ctrl + Alt + F7.</li>
          <li>
            Now press the drop down key near Commit All or Commit staged button
            to see the stashing options.
          </li>
          <li>
            <b>Option 1:</b> Only if you want to stash untracked files like Git
            ignored files or Files which are not included into project then go
            for this option.
          </li>
          <li>
            <b>Option 2:</b> You can use this option Stash All and Keep Staged
            (--keep-index) by default.
          </li>
          <li>You can keep/save multiple stashes.</li>
          <li>
            <b>Retrieving a stash:</b> You have two options, either to Apply or
            Pop.
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>Apply will retrieve the stash but wont delete the stash.</li>
              <li>
                Pop (Apply + Delete) will retrieve the stash and will also
                delete it.
              </li>
            </ul>
            Again, Under Apply/Pop you gonna see two options:
            <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
              <li>
                <b>Apply/Pop and restore staged (--index):</b> Always use this option by default. This means while stashing if
                you had some files in changes and some files in staged, it'll be
                restored as such to changes and staged.
              </li>
              <li>
                <b>Apply/Pop all as unstaged:</b> If you use this option, while stashing if you had some files in
                changes and some files in staged, all of these files now will be
                clubbed to Changes.
              </li>
            </ul>
          </li>
           <li>
            <b>
              <FaArrowCircleRight /> Reference Image:
            </b>
            <br />
            <br></br>
            <CarouselComponentGST />
          </li>
        </ol>

        <h2>
          <FaClipboardList className="icon" /> Terms to Know
        </h2>
        <ul>
          <li>
            <b>Working Directory:</b> Your local workspace where you make
            changes.
          </li>
          <li>
            <b>Staging Area:</b> A draft space to prepare changes before
            committing.
          </li>
          <li>
            <b>Local Repository:</b> Your project's history stored on your
            computer.
          </li>
          <li>
            <b>Remote Repository:</b> The shared version hosted on GitHub.
          </li>
          <li>
            <b>Branches:</b> Parallel versions of your project for independent
            work.
          </li>
          <li>
            <b>Pull Request (PR):</b> A proposal to merge changes into another
            branch.
          </li>
          <li>
            <b>Merge:</b> Integrating changes from one branch into another.
          </li>
        </ul>

        <h2>
          <FaClipboardList className="icon" /> 19 Essential Git Commands
        </h2>
        <ol>
          <li>
            <b>git init</b> — Initialize a Git repository.
            <br />
            <code className="cmd">git init</code>
          </li>
          <li>
            <b>git clone</b> — Clone an existing repository.
            <br />
            <code className="cmd">
              git clone https://github.com/user/repo.git
            </code>
          </li>
          <li>
            <b>git add</b> — Add file(s) to staging area.
            <br />
            <code className="cmd">git add index.js</code>
            <br />
            <code className="cmd">git add -A</code>
          </li>
          <li>
            <b>git commit</b> — Commit staged changes.
            <br />
            <code className="cmd">git commit -m "Added login feature"</code>
          </li>
          <li>
            <b>git add -p</b> — Stage parts of changes.
            <br />
            <code className="cmd">git add -p</code>
          </li>
          <li>
            <b>git status</b> — Show status of working directory.
            <br />
            <code className="cmd">git status</code>
          </li>
          <li>
            <b>git log</b> — Show commit history.
            <br />
            <code className="cmd">git log</code>
            <br />
            <code className="cmd">git log --oneline</code>
          </li>
          <li>
            <b>git diff</b> — Show changes between commits.
            <br />
            <code className="cmd">git diff</code>
          </li>
          <li>
            <b>git branch</b> — Manage branches.
            <br />
            <code className="cmd">git branch</code>
            <br />
            <code className="cmd">git branch new-feature</code>
            <br />
            <code className="cmd">git branch -d old-feature</code>
          </li>
          <li>
            <b>git checkout</b> — Switch branches.
            <br />
            <code className="cmd">git checkout branch</code>
            <br />
            <code className="cmd">git checkout -b new-branch</code>
          </li>
          <li>
            <b>git remote add origin</b> — Connect to remote.
            <br />
            <code className="cmd">
              git remote add origin https://github.com/user/repo.git
            </code>
          </li>
          <li>
            <b>git pull / git push</b> — Sync with remote.
            <br />
            <code className="cmd">git pull origin main</code>
            <br />
            <code className="cmd">git push origin main</code>
          </li>
          <li>
            <b>git reset</b> — Undo commits.
            <br />
            <code className="cmd">git reset HEAD~1</code>
          </li>
          <li>
            <b>git stash</b> — Save work temporarily.
            <br />
            <code className="cmd">git stash</code>
            <br />
            <code className="cmd">git stash -u</code>
          </li>
          <li>
            <b>git reflog</b> — Show command history.
            <br />
            <code className="cmd">git reflog</code>
          </li>
          <li>
            <b>git merge</b> — Merge branches.
            <br />
            <code className="cmd">git merge feature-branch</code>
          </li>
          <li>
            <b>git fetch</b> — Download remote changes.
            <br />
            <code className="cmd">git fetch origin</code>
          </li>
          <li>
            <b>git rebase</b> — Reapply commits on another branch.
            <br />
            <code className="cmd">git rebase main</code>
          </li>
          <li>
            <b>.gitignore</b> — Exclude files from Git.
            <br />
            <code className="cmd">
              // Create .gitignore and list unwanted files
            </code>
          </li>
        </ol>
      </div>
    </div>
  );
}

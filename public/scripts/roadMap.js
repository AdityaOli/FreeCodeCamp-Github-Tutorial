var roadMap = [];

var starterText =
  "The GIT workflow is as follows: You go to the directory where you want to have version controll. You use git init to put this directory under version control. This creates a new repository for that current location. You make changes to your files, then use git add to stage files into the staging area. You'll use git status and git diff to see what you've changed, and then finally git commit to actually record the snapshot forever into your local repository. When you want to upload your changes to a remote repository you'll use git push. When you want to download changes from a remote repository to your local repository you'll use git fetch and git merge. ";

roadMap.push({
  Id: "1",
  Command: "git init",
  Description:
    "None",
  SequenceNumber: 1
});

roadMap.push({
  Id: "2",
  Command: "git add --all",
  Description:
    "None",
  SequenceNumber: 1
});

roadMap.push({
  Id: "3",
  Command: "git commit -am 'Initial commit'",
  Description:
    "None",
  SequenceNumber: 3
});

roadMap.push({
  Id: "4",
  Command: "git remote add EXAMPLE https://nschlimm@github.com/nschlimm/git_example.git",
  Description:
    "None",
  SequenceNumber: 4
});

roadMap.push({
  Id: "5",
  Command: "git push EXAMPLE master",
  Description: "None",
  SequenceNumber: 5
});

roadMap.push({
  Id: "6",
  Command: "git fetch EXAMPLE",
  Description: "None",
  SequenceNumber: 6
});

roadMap.push({
  Id: "7",
  Command: "git status -s",
  Description: "None",
  SequenceNumber: 7
});


roadMap.push({
  Id: "8",
  Command: "git clone [repository-url]",
  Description: "None",
  SequenceNumber: 8
});


roadMap.push({
  Id: "9",
  Command: "git pull",
  Description: "None",
  SequenceNumber: 9
});

roadMap.push({
  Id: "10",
  Command: "git stash",
  Description: "None",
  SequenceNumber: 10
});

roadMap.push({
  Id: "11",
  Command: "git stash pop",
  Description: "None",
  SequenceNumber: 11
});

module.exports = roadMap;
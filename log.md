Addding upstream in open-source projects
First cd into the folder file.
$git upstream
git remote add upstream ((url of the cloned repo))

The importance of upstream is to updated with the current repo incase you left off pushing your projects some weeks ago.


After two weeks
$git checkout master     ` //
$ git fetch upstream      //to pull information in upstream... pull their own master
$ git merge upstream/master  // update my own master with their master
$ git merge master myBranchName   //update my local branch
$git checkout myBranchName    // switched to my master
$git add .
$git commit -m "my commit message"
$git push origin myBranchName




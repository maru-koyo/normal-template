name="sushi"
time=`date "+%Y%m%d-%H_%M"`
mixName="$time-$name"

git archive --prefix=$mixName/ main `git diff --name-only origin/main main --diff-filter=d` -o history/$mixName.zip
# time=`date "+%Y%m%d-%H_%M"`
# CURRENT=$(cd $(dirname $0);pwd)
# DIRNAME=$(echo "$CURRENT" | awk -F'/' '{print $(NF-2)}')

# mixName="$time-$DIRNAME"

# git archive --prefix=$mixName/ main `git diff --name-only origin/main main --diff-filter=d` -o tools/difference/$mixName.zip

time=$(date "+%Y%m%d-%H_%M")
CURRENT=$(cd "$(dirname "$0")" || exit; pwd)
DIRNAME=$(echo "$CURRENT" | awk -F'/' '{print $(NF-2)}')

mixName="$time-$DIRNAME"

git archive --prefix="$mixName/" main "$(git diff --name-only origin/main main --diff-filter=d -- src/)" -o "tools/difference/$mixName.zip"
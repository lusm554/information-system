path=src/server/index.js

exit_nodemon() {
  if [[ $? -eq 130 ]]
  then 
    exit 0
  else 
    exit $?
  fi
}

if [[ $1 == 'dev' ]]
then
  nodemon $path
  exit_nodemon
else
  node $path
fi
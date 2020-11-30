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
elif [[ $1 == 'build' ]];
then
  mv ./src/config/.example_env  ./src/config/.env
else
  node $path
fi

#!/usr/bin/env bash
############################################################
# Help                                                     #
# note: help is relevant to running from npm, not bash     #
############################################################
Help()
{
   # Display Help
   echo "Helper script for launching Cypress tests."
   echo
   echo "Syntax:"
   echo '-----------------------------------------------------'
   echo "  npm run test -- [ -i | --interactive ] environment "
   echo "                   or"
   echo "  yarn test [ -i | --interactive ] environment "
   echo '-----------------------------------------------------'
   echo ""
   echo "please specify the environment (local | sbx | uat) to run the tests against,"
   echo "using the optional -i flag to run Cypress in interactive mode"
   echo ""
}

############################################################
############################################################
# Main program                                             #
############################################################
############################################################
interactive=false
type=automated
while [[ $1 =~ ^-.* ]]; do
  case $1 in
    -i | --interactive)
      interactive=true
      type="interactive"
      ;;
  esac
  shift
done
if [[ $1 =~ local|uat|sbx ]]; then
  echo "******************************************************"
  echo "now running ${type} testing in ${1} environment"
  echo "******************************************************"
  echo ""
  if [[ $interactive == true ]]; then
    npx cypress open --config-file ./config/"${1}".config.js
  else
    docker run -it -v=$PWD:/code -w /code --entrypoint cypress cypress/included:10.10.0 run --config-file /code/config/"${1}".config.js
  fi
  exit
else
  Help
fi
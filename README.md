# apache-royale-crux


Steps

Create one folder for download.

git clone https://github.com/gustavodecarli/apache-royale-crux.git

Server 
cd ./apache-royale-crux/Server

mvn tomcat7:run-war


Client

cd ./apache-royale-crux/Client

mvn royale:compile-app
 
open -a "Google Chrome" ./target/bin/js-debug/index.html

# apache-royale-crux


Steps

Create one folder for download.

git clone https://github.com/gustavodecarli/apache-royale-crux.git

1. Server

cd ./apache-royale-crux/Server

mvn tomcat7:run-war


2. Client

cd ./apache-royale-crux/Client

mvn royale:compile-app
 
open -a "Google Chrome" ./target/bin/js-debug/index.html --args --disable-web-security 
(if this not work, run from the vscode the client)

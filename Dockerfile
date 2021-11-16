FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Marcel Schueren <marcel.schueren@web.de>

EXPOSE 8080

ADD backend/target/app.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]

FROM eclipse-temurin:17-jdk-jammy
COPY . .
RUN chmod +x mvnw || true
RUN ./mvnw clean install -DskipTests
ENTRYPOINT [ "java", "-jar", "target/produtos-0.0.1-SNAPSHOT.jar" ]
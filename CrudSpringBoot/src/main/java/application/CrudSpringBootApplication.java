package application;

import application.model.Course;
import application.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class CrudSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringBootApplication.class, args);
    }
    @Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository) {
        return args -> {
            courseRepository.deleteAll();

            Course c = new Course(null,"Vue", "front-end");
            Course c1 = new Course(null, "Angular", "front-end");
            Course c2 = new Course(null, "Springboot", "back-end");
            Course c3 = new Course(null, "Flutter", "mobile");
            Course c4 = new Course(null, "Python para Machine Learning", "ia");

            List lista = new ArrayList<>();
            lista.add(c);
            lista.add(c1);
            lista.add(c2);
            lista.add(c3);
            lista.add(c4);

            courseRepository.saveAll(lista);
        };
    }

}

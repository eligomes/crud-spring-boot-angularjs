package com.teste;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan({"com.teste"})
@EnableJpaRepositories
public class Application{

    public static void main(String[] args) throws Exception{
        SpringApplication.run(Application.class, args);
   
    }
}


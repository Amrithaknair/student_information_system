package com.example.apicalldemo.config;

import com.example.apicalldemo.document.user;
import com.example.apicalldemo.repository.userrepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = userrepository.class)
@Configuration
public class mongodbconfig {
    @Bean
    CommandLineRunner commandLineRunner(userrepository ur )
    {
        return  new CommandLineRunner()
        {
            @Override
            public void  run(String...strings) throws Exception
            {


            }
        };
    }
}

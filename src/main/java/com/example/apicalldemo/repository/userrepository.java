package com.example.apicalldemo.repository;

import com.example.apicalldemo.document.user;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface userrepository extends MongoRepository<user,String> {
}

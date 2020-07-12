package com.example.apicalldemo.document;

import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class user {

    private  String id;

    private String name;

    private String dob;

    private String stclass;

    private String division;

    private String gender;

    public user(String id, String name, String dob, String stclass, String division, String gender) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.stclass = stclass;
        this.division = division;
        this.gender = gender;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getStclass() {
        return stclass;
    }

    public void setStclass(String stclass) {
        this.stclass = stclass;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}

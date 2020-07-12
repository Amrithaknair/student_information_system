package com.example.apicalldemo.resourse;

import com.example.apicalldemo.document.user;
import com.example.apicalldemo.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3001")
@RestController
@RequestMapping("/rest/users")
public class userresourse {
    @Autowired
    private userrepository ur;
    public userresourse(userrepository ur)
    {
        this.ur=ur;
    }
    @GetMapping("/all")
    public List<user> getAll()
    {
       return ur.findAll(Sort.by(Sort.Direction.ASC,"name"));
        //return ur.findAll();
    }
    @PutMapping
    public String insert(@RequestBody @Validated user u)

    {
        System.out.println("Result:"+u.getName()+"-"+u.getDob()+"-"+u.getStclass()+"-"+u.getDivision()+"-"+u.getGender());
      
            System.out.println("insert");
        this.ur.insert(u);
        return "Data Stored Successfully!!!";
    }
}

package de.neufische.mydepot.security.controller;

import de.neufische.mydepot.security.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping
    public String login(@RequestBody AppUser appUser) {
        this.authenticationManager
                .authenticate(
                        new UsernamePasswordAuthenticationToken(
                                appUser.getUsername(),
                                appUser.getPassword()
                        ));

        // Todo Create a real token
        return "a valid JWT";
    }
}

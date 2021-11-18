package de.neufische.mydepot.security.controller;

import de.neufische.mydepot.security.model.AppUser;
import de.neufische.mydepot.security.repo.AppUserRepo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class LoginControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private AppUserRepo appUserRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${my-depot.jwt.secret}")
    private String JWT_SECRET;

    @Test
    void loginWithValidCredentials_ShouldReturnValidJWT() {
        //GIVEN
        appUserRepo.save(AppUser.builder()
                .username("user")
                .password(passwordEncoder.encode("some-password"))
                .build());
        //WHEN
        AppUser appUser = new AppUser("user", "some-password");
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", appUser, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        Claims body = Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(response.getBody()).getBody();
        assertThat(body.getSubject(), is("user"));
    }

    @Test
    void loginWithInvalidCredentials_ShouldReturnError() {
        //GIVEN
        appUserRepo.save(AppUser.builder()
                .username("user")
                .password(passwordEncoder.encode("some-password"))
                .build());
        //WHEN
        AppUser appUser = new AppUser("user", "wrong-password");
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", appUser, String.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.UNAUTHORIZED));
    }
}
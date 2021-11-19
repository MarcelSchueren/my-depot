package de.neufische.mydepot.controller;

import de.neufische.mydepot.model.UserResponseDto;
import de.neufische.mydepot.security.model.AppUser;
import de.neufische.mydepot.security.repo.AppUserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerTest {

    @Autowired
    private AppUserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void getLoggedInUserWithValidToken() {
        //GIVEN
        HttpHeaders headers = getHttpHeadersWithJWT();
        //WHEN
        ResponseEntity<UserResponseDto> response = restTemplate.exchange("/api/user/me", HttpMethod.GET, new HttpEntity<>(headers), UserResponseDto.class);
        //THEN
        assertEquals( HttpStatus.OK, response.getStatusCode());
        assertEquals( "test_username", response.getBody().getUsername());
    }

    @Test
    void getLoggedInUserWithInvalidToken() {
        //GIVEN
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        //WHEN
        ResponseEntity<UserResponseDto> response = restTemplate.exchange("/api/user/me", HttpMethod.GET, new HttpEntity<>(headers), UserResponseDto.class);
        //THEN
        assertEquals( HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    private HttpHeaders getHttpHeadersWithJWT() {
        userRepo.save(AppUser.builder().username("test_username").password(passwordEncoder.encode("some-password")).build());
        AppUser loginData = new AppUser("test_username", "some-password");
        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", loginData, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(response.getBody());
        return headers;
    }
}
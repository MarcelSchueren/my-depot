package de.neufische.mydepot.controller;

import de.neufische.mydepot.api.ApiError;
import de.neufische.mydepot.api.YahooApiException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.NoSuchElementException;

@Slf4j
@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiError> handleBadCredentialsException(BadCredentialsException ex) {
        log.error("Username and/or password are not valid!", ex);
        ApiError apiError = new ApiError("Username and/or password are not valid! ", ex.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ApiError> handleNoSuchElementException(NoSuchElementException ex) {
        log.error("Symbol is not valid", ex);
        ApiError apiError = new ApiError("Symbol is not valid! Try a different, e.g. 'AMZN' ", ex.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(YahooApiException.class)
    public ResponseEntity<ApiError> handleYahooApiException(YahooApiException ex) {
        log.error("Problems reading from extern Yahoo-Finance-API ", ex);
        ApiError apiError = new ApiError("Problems reading from extern Yahoo-Finance-API ", ex.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ApiError> handleUnknownException(Throwable ex){
        log.error("Unknown Error!", ex);
        ApiError apiError = new ApiError("Unknown Error!", ex.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

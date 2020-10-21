package com.example.loginapp;


import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.example.loginapp.MainActivity;

public class HomeActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //Home Activity starts from here
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

    }
    public void reDirectToHomePage (View view){
        //It will redirect to HomePage
        Intent redirect = new Intent(HomeActivity.this, MainActivity.class);
        startActivity(redirect);
    }

}

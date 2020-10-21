package com.example.loginapp;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.example.loginapp.R;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button loginButton = (Button) findViewById(R.id.loginButton);
        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View
                                        view) {

                EditText usernameCtrl = (EditText) findViewById(R.id.userNameText);
                EditText passwordCtrl = (EditText) findViewById(R.id.passwordText);
                String username = usernameCtrl.getText().toString();
                String password = passwordCtrl.getText().toString();

                boolean validationFlag = false;
                //The Program Logic which checks and match the Username and Password
                if (!username.isEmpty() && !password.isEmpty()) {
                    if (username.equals("Alyami") && password.equals("Password")) {
                        //If the Username and Password matches it sets the validationFlag to true
                        validationFlag = true;
                    }
                }
                if (!validationFlag) {
                    //If the Username and Password don't matches validation flag would be false it will generate error message from here
                    AlertDialog.Builder builder1 = new AlertDialog.Builder(MainActivity.this);
                    builder1.setTitle("Login Error");
                    //Message on the screen
                    builder1.setMessage("You entered a wrong password or username.");
                    builder1.setNegativeButton("okay", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            dialogInterface.cancel();
                        }
                    }).show();

                } else {
                    //If the Username and Password Matches it will move us to the Home Activity
                    Intent redirect = new Intent(MainActivity.this, HomeActivity.class);
                    startActivity(redirect);
                }

            }
        });

    }

}


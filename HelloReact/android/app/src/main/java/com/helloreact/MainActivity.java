package com.helloreact;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

import webinstats.android_wis.Webinstats;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "HelloReact";
  }

  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    Bundle bundle = intent.getExtras();
    final Uri appLinkData = intent.getData();
    new Webinstats("//___YOUR_SUBDOMAIN__.webinstats.com","___YOUR_COMPANY_ID___","0").trackDeepLink(this,appLinkData,bundle);
  }
}

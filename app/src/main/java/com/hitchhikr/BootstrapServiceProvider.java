package com.hitchhikr;

import android.accounts.AccountsException;
import android.app.Activity;

import com.hitchhikr.core.BootstrapService;

import java.io.IOException;

public interface BootstrapServiceProvider {
    BootstrapService getService(Activity activity) throws IOException, AccountsException;
}

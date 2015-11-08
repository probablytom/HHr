package com.hitchhikr;

import com.hitchhikr.authenticator.BootstrapAuthenticatorActivity;
import com.hitchhikr.core.TimerService;
import com.hitchhikr.ui.BootstrapActivity;
import com.hitchhikr.ui.BootstrapFragmentActivity;
import com.hitchhikr.ui.BootstrapTimerActivity;
import com.hitchhikr.ui.CheckInsListFragment;
import com.hitchhikr.ui.MainActivity;
import com.hitchhikr.ui.NavigationDrawerFragment;
import com.hitchhikr.ui.NewsActivity;
import com.hitchhikr.ui.NewsListFragment;
import com.hitchhikr.ui.UserActivity;
import com.hitchhikr.ui.UserListFragment;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(
        modules = {
                AndroidModule.class,
                BootstrapModule.class
        }
)
public interface BootstrapComponent {

    void inject(BootstrapApplication target);

    void inject(BootstrapAuthenticatorActivity target);

    void inject(BootstrapTimerActivity target);

    void inject(MainActivity target);

    void inject(CheckInsListFragment target);

    void inject(NavigationDrawerFragment target);

    void inject(NewsActivity target);

    void inject(NewsListFragment target);

    void inject(UserActivity target);

    void inject(UserListFragment target);

    void inject(TimerService target);

    void inject(BootstrapFragmentActivity target);
    void inject(BootstrapActivity target);


}

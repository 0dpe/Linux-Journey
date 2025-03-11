{ pkgs, ... }:

{
  imports =
    [
      ./hardware-configuration.nix
    ];

  boot.loader = {
    systemd-boot.enable = true;
    efi.canTouchEfiVariables = true;
  };

  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  networking = {
    hostName = "ZHAN";
    networkmanager.enable = true;
  };

  time.timeZone = "America/New_York";

  services = {
    libinput.enable = true;
    pipewire = {
      enable = true;
      wireplumber.enable = true;
      pulse.enable = true;
      alsa.enable = true;
      alsa.support32Bit = true;
    };
    udev.extraRules = ''
      ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", MODE="0666", RUN+="${pkgs.coreutils}/bin/chmod a+w /sys/class/backlight/%k/brightness"
    '';
    getty.extraArgs = [ "--skip-login" "--login-options" "tim" ];
  };

  hardware = {
    bluetooth = {
      enable = true;
      powerOnBoot = true;
    };
  };
  
  security.rtkit.enable = true;

  xdg.portal = {
    enable = true;
    extraPortals = [ pkgs.xdg-desktop-portal-gtk ];
  };

  users = {
    users.tim = {
      isNormalUser = true;
      extraGroups = [ "wheel" "networkmanager" ];
    };
    defaultUserShell = pkgs.zsh;
  };

  environment = {
    systemPackages = with pkgs; [
      kitty
      capitaine-cursors
      swww
      oh-my-posh
      vscodium
    ];
    sessionVariables.NIXOS_OZONE_WL = "1";
    shellAliases = {
      rebuild = "sudo nixos-rebuild switch --flake github:0dpe/Linux-Journey#ZHAN --refresh";
    };
  };

  fonts = {
    enableDefaultPackages = false;
    packages = with pkgs; [
      nerd-fonts.go-mono
      nerd-fonts.roboto-mono
      nerd-fonts.lilex
      nerd-fonts.dejavu-sans-mono
      noto-fonts
      twemoji-color-font
    ];
    fontconfig.defaultFonts = {
      serif = [ "Noto Serif" ];
      sansSerif = [ "Noto Sans" ];
      monospace = [ "DejaVuSansM Nerd Font Mono" ];
      emoji = [ "Twitter Color Emoji" ];
    };
  };

  programs = {
    git.enable = true;
    
    zsh = {
      enable = true;
      autosuggestions.enable = true;
    };

    hyprland.enable = true;
  
    firefox = {
      enable = true;
      package = pkgs.firefox-bin;
      policies = {
        DisablePocket = true;
        #ExtensionSettings = ;
        FirefoxHome = {
          Search = false;
          TopSites = false;
          SponsoredTopSites = false;
          Highlights = false;
          Pocket = false;
          SponsoredPocket = false;
        };
        Homepage = {
          URL = "https://worcesteracademy.myschoolapp.com/app/student";
          StartPage = "previous-session";
        };
        OverrideFirstRunPage = "";
        #Permissions = ;
        Preferences = {
          "browser.tabs.tabmanager.enabled" = {
            Value = false;
            Status = "user";
          };
          "browser.tabs.inTitlebar" = {
            Value = 0;
            Status = "user";
          };
          "browser.uidensity" = {
            Value = 1;
            Status = "user";
          };
          "browser.urlbar.shortcuts.tabs" = {
            Value = false;
            Status = "user";
          };
          "browser.urlbar.suggest.engines" = {
            Value = false;
            Status = "user";
          };
          "browser.urlbar.suggest.topsites" = {
            Value = false;
            Status = "user";
          };
          "browser.urlbar.suggest.calculator" = {
            Value = true;
            Status = "user";
          };
          "browser.urlbar.unitConversion.enabled" = {
            Value = true;
            Status = "user";
          };
          "browser.vpn_promo.enabled" = {
            Value = false;
            Status = "user";
          };
        };
      };
    };

    waybar.enable = true;
  };

  system.stateVersion = "24.05"; # Do not edit
}

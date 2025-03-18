{ pkgs, inputs, config, ... }:

{
  imports = [
    inputs.nix-colors.homeManagerModules.default
  ];

  colorScheme = inputs.nix-colors.colorSchemes.tokyo-night-terminal-dark;

  home = {
    username = "tim";
    homeDirectory = "/home/tim";
    stateVersion = "24.05";
    pointerCursor = {
      package = pkgs.capitaine-cursors;
      name = "capitaine-cursors";
      size = 22;
      gtk.enable = true;
      x11.enable = true;
      x11.defaultCursor = "default";
    };
    file = {
      ".swwwRandomizer" = {
        enable = true;
        executable = true;
        text = ''
          #!/usr/bin/env zsh
          used=()
          while :; do
            all=(''$1/*)
            [[ ''$#used -eq ''$#all ]] && used=(''$selected)
            unused=(''${all:|used})
            selected=''${unused[''$RANDOM % ''$#unused + 1]}
            random_pos=(''$(seq 0.1 .1 0.9 | shuf))
            swww img ''$selected \
              --resize crop \
              -t grow \
              --transition-pos ''$random_pos[1],''$random_pos[2] \
              --transition-duration 4 \
              --transition-fps 60 \
              -f Nearest
            used+=(''$selected)
            sleep ''$2
          done
        '';
      };
    };
  };

  gtk = {
    enable = true;
  }; 

  wayland.windowManager.hyprland = {
    enable = true;
    settings = {
      bind = [
        "ALT, TAB, cyclenext"
        "ALT, TAB, alterzorder, top"
        "SUPER, T, exec, kitty"
        "SUPER, W, killactive"
        "SUPER, Q, togglefloating"
        "SUPER, F, fullscreenstate, 2 0"
        "SUPER, K, exit"
        "SUPER, tab, workspace, e+1"
        "SUPER_SHIFT, tab, movetoworkspace, e+1"
        "SUPER, E, movetoworkspace, emptyn"
      ];
      binde = [
        "SUPER, MINUS, exec, val=$(< /sys/class/backlight/intel_backlight/brightness); tee /sys/class/backlight/intel_backlight/brightness <<< $((val <= 4188 ? 188 : val - 4000))"
        "SUPER, EQUAL, exec, val=$(< /sys/class/backlight/intel_backlight/brightness); tee /sys/class/backlight/intel_backlight/brightness <<< $((val >= 20000 ? 24000 : val + 4000))"
        ", XF86AudioMute, exec, wpctl set-mute @DEFAULT_SINK@ toggle"
        ", XF86AudioLowerVolume, exec, wpctl set-volume @DEFAULT_SINK@ 2%-"
        ", XF86AudioRaiseVolume, exec, wpctl get-volume @DEFAULT_SINK@ | awk '{if ($2 < 2.20) system(\"wpctl set-volume @DEFAULT_SINK@ 2%+\")}'"
      ];
      bindm = [
        "SHIFT, mouse:272, movewindow"
        "CTRL, mouse:272, resizewindow"
      ];
      bezier = [
        "linear, 0.5, 0.5, 0.5, 0.5"
        "snappyOut1, 0, 0.85, 0, 1"
        "snappyOut2, 0, 0.6, 0.15, 1"
        "expoOut, 0.16, 1, 0.3, 1"
      ];
      animation = [
        "windowsIn, 1, 5, snappyOut1, popin 20%"
        "windowsOut, 1, 8, snappyOut2, popin 80%"
        "windowsMove, 1, 5, snappyOut1"
        "fadeOut, 1, 4, expoOut"
        "borderangle, 1, 40, linear, loop"
        "workspaces, 1, 3, snappyOut1, slide"
      ];
      general = {
        border_size = 2;
        gaps_in = 4;
        gaps_out = 10;
        "col.active_border" = "rgba(225,225,225,1) rgba(255,255,255,0.650) 45deg";
        "col.inactive_border" = "rgba(107,127,148,0.500)";
        resize_on_border = true;
      };
      decoration = {
        rounding = 8;
	shadow = {
	  range = 6;
	  render_power = 1;
	  color = "rgba(102,196,204,0.1)";
	  color_inactive = "rgba(51,51,51,0.1)";
	};
        blur = {
          size = 4;
          passes = 3;
        };
      };
      input = {
        repeat_delay = 500;
        sensitivity = "0.3";
        accel_profile = "flat";
        touchpad = {
          disable_while_typing = false;
          natural_scroll = true;
          tap-and-drag = false;
          scroll_factor = 0.15;
        };
      };
      gestures = {
        workspace_swipe = true;
      };
      misc = {
        disable_hyprland_logo = true;
        disable_splash_rendering = true;     
        animate_manual_resizes = true;
        animate_mouse_windowdragging = true;
        background_color = 000000;
        middle_click_paste = false;
      };
      windowrule = [
        "scrolltouchpad 1.0, kitty"
      ];
      layerrule = [
        "blur, waybar"
        "ignorealpha 0, waybar"
      ];
      exec-once = [
        "swww-daemon --no-cache"
        "swww clear 000000 && ~/.swwwRandomizer /home/tim/Wallpapers 3600"
      ];
    };
  };

  programs.kitty = {
    enable = true;
    settings = {
      font_size = "9.5";
      cursor_shape = "beam";
      cursor_shape_unfocused = "beam";
      cursor_stop_blinking_after = 0;
      scrollback_fill_enlarged_window = true;
      mouse_hide_wait = -1;
      show_hyperlink_targets = true;
      clear_all_mouse_actions = true;
      enable_audio_bell = false;
      confirm_os_window_close = 0;
      background_opacity = "0.3";
      selection_background = "#ffffff";
      clear_all_shortcuts = true;
    };
    extraConfig = ''
      mouse_map left press ungrabbed mouse_selection normal
      mouse_map left doublepress ungrabbed mouse_selection word
      mouse_map left triplepress ungrabbed mouse_selection line
      map ctrl+c copy_or_interrupt
      map ctrl+x copy_and_clear_or_interrupt
      map ctrl+v paste_from_clipboard
      map ctrl+equal change_font_size all +1.0
      map ctrl+minus change_font_size all -1.0
    '';
  };

  programs.firefox = {
    enable = true;
    package = pkgs.firefox-bin;
    profiles.tim1 = {
      name = "School";
      id = 0;
      bookmarks = [
        {
          toolbar = true;
          bookmarks = [
            {
              name = "Gmail";
              url = "https://mail.google.com";
              keyword = "m";
            }
            {
              name = "Drive";
              url = "https://drive.google.com/drive/u/0/my-drive";
              keyword = "d";
            }
            {
              name = "Claude";
              url = "https://claude.ai/chats";
              keyword = "c";
            }
          ];
        }
      ];
      #extensions = ;
      settings = {
        "middlemouse.paste" = false;
        "findbar.highlightAll" = true;
      };
      #extraConfig = ''
      #'';
      search.engines = {
        "Bing CN" = {
          urls = [{ template = "https://cn.bing.com/search?q={searchTerms}&ensearch=1"; }];
          definedAliases = [ "@b" ];
          iconURL = "https://img.icons8.com/fluency/48/bing--v4.png";
        };
        "Bing".metaData.hidden = true;
        "DuckDuckGo".metaData.hidden = true;
        "Wikipedia (en)".metaData.hidden = true;
      };
      #userChrome = ''
      #'';
      #userContent = ''
      #'';
    };
    profiles.test = {
      id = 1;
    };
  };

  programs.zsh = {
    enable = true;
    profileExtra = ''
      if [ -z "''${DISPLAY}" ] && [ "''${XDG_VTNR}" -eq 1 ]; then
        exec Hyprland
      fi
    '';
  };

  programs.oh-my-posh = {
    enable = true;
    settings = {
      "$schema" = "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json";
      final_space = true;
      blocks = [
        {
          type = "prompt";
          alignment = "left";
          segments = [
            {
              type = "session";
              style = "plain";
              foreground = "#${config.colorScheme.palette.base0D}";
              template = "{{ .UserName }}";
            }
            {
              type = "path";
              style = "plain";
              foreground = "#${config.colorScheme.palette.base0C}";
              properties = {
                style = "full";
              };
            }
            {
              type = "text";
              style = "plain";
              foreground = "#${config.colorScheme.palette.base05}";
              template = "❱";
            }
          ];
        }
        {
          type = "rprompt";
          alignment = "right";
          overflow = "break";
          segments = [
            {
              type = "executiontime";
              style = "plain";
              foreground = "#${config.colorScheme.palette.base04}";
            }
          ];
        }
      ];
    };
  };

  programs.waybar = {
    enable = true;
    settings.bar = {
      reload_style_on_change = true;
      layer = "top";
      position = "top";
      modules-left = [ "hyprland/workspaces" ];
      modules-right = [ "wireplumber" "bluetooth" "network" "battery" "clock" ];
      spacing = 0;
      "hyprland/workspaces" = {
        show-special = true;
        format = "";
      };
      wireplumber = {
        format = "{volume}%<span size='80%'> </span><span size='135%' line_height='0.1' rise='-1200'>󰕾</span>";
        format-muted = "{volume}%<span size='80%'> </span><span size='135%' line_height='0.1' rise='-1200'>󰸈</span>";
        on-click = "/run/current-system/sw/bin/wpctl set-mute @DEFAULT_SINK@ toggle";
        scroll-step = "0.1";
        tooltip = false;
      };
      bluetooth = {
        format-disabled = "Controller Disabled";
        format-off = "<span size='120%' line_height='0.1' rise='-6800'>󰂲</span>";
        format-on = "󰂯";
        format-connected = "{device_alias} 󰂯";
        on-click-right = "/run/current-system/sw/bin/bluetoothctl power $(bluetoothctl show | grep -q 'Powered: yes' && echo off || echo on)";
        on-click = "/run/current-system/sw/bin/bluetoothctl connect F8:4E:17:D3:E7:4A";
        tooltip-format-off = "{controller_alias} {status}";
        tooltip-format-on = "{controller_alias} {status}";
        tooltip-format-connected = "{controller_alias} {status}\n{device_enumerate}";
        tooltip-format-enumerate-connected = "{device_alias} {device_address}";
      };
      network = {
        format-wifi = "{essid} {icon}";
        format-disconnected = "󰤮";
        format-icons = [ "󰤟" "󰤢" "󰤥" "󰤨" ];
        tooltip-format-wifi = "{bandwidthUpBytes} 󰕒\n{bandwidthDownBytes 󰇚";
      };
      battery = {
        bat = "BAT0";
        full-at = 97;
        format = "{capacity}% {icon}";
        format-icons = [ "󰁺" "󰁻" "󰁼" "󰁽" "󰁾" "󰁿" "󰂀" "󰂁" "󰂂" "󰁹" ];
        tooltip = false;
      };
      clock = {
        format = "{:%b %d %R}";
        tooltip = false;
      };
    };
    style = ''
      * {
        all: unset;
        font: 12px "JetBrainsMonoNL Nerd Font Mono", monospace;
      }
      tooltip {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 9px;
      }
      .modules-right {
        background: rgba(0, 0, 0, 0.3);
        margin: 7px 9px 0px 0px;
        padding-top: 0.45em;
        padding-bottom: 0.45em;
        border-radius: 9px;
      }
      .modules-left {
        background: rgba(0, 0, 0, 0.3);
        margin: 7px 0px 0px 9px;
        padding-top: 0.45em;
        padding-bottom: 0.45em;
        border-radius: 9px;
      }
      #workspaces {
        padding-right: 0.45em;
        padding-left: 0.45em;
      }
      #workspaces button {
        color: rgba(255, 255, 255, 0.4);
        padding-right: 0.45em;
        padding-left: 0.45em;
        transition: all 0.1s linear;
      }
      #workspaces button:hover {
        text-shadow: rgba(0, 0, 0, 0.7) 0em 0em 0.4em;
      }
      #workspaces button.active {
        color: rgb(225, 225, 225);
      }
      #workspaces button.urgent {
        color: rgba(255, 0, 0, 0.8);
      }
      #wireplumber {
        padding-right: 0.9em;
        padding-left: 0.9em;
        transition: text-shadow 0.1s linear;
      }
      #wireplumber:hover {
        text-shadow: rgba(0, 0, 0, 0.7) 0em 0em 0.4em;
      }
      #bluetooth {
        padding-right: 0.9em;
        padding-left: 0.9em;
        transition: text-shadow 0.1s linear;
      }
      #bluetooth:hover {
        text-shadow: rgba(0, 0, 0, 0.7) 0em 0em 0.4em;
      }
      #network {
        padding-right: 0.9em;
        padding-left: 0.9em;
      }
      #battery {
      }
      #clock {
      }
    '';
  };

  programs.vscode = {
    enable = true;
    package = pkgs.vscodium;
    mutableExtensionsDir = false;
    profiles.default = {
      enableExtensionUpdateCheck = true;
      enableUpdateCheck = true;
      extensions = with pkgs.vscode-extensions; [
        bbenoist.nix
        bierner.github-markdown-preview
        streetsidesoftware.code-spell-checker
      ];
      userSettings = {
        "window.dialogStyle" = "custom";
        "window.titleBarStyle" = "custom";
        "editor.minimap.enabled" = false;
        "cSpell.maxNumberOfProblems" = 10000;
        "markdown.preview.scrollPreviewWithEditor" = false;
      };
    };
  };

  programs.home-manager.enable = true;
}

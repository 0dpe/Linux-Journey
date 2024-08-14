# Linux Journey (Jun 20 2024)

## Choosing

### Linux Distribution
Distro | Package Manager | Minimal | Comments
-|-|-|-
[PeppermintOS](https://peppermintos.com/) | Debian based | Yes | Small community; only xfce supported?
[antiX Linux](https://antixlinux.com/) | Debian based | Extremely | Looks old
[Tiny Core Linux](http://tinycorelinux.net/) | | Extremely | Advanced
[Void Linux](https://voidlinux.org/) | XBPS (independent) | No
[Arch Linux](https://archlinux.org/) | Pacman (AUR - independent) | Maybe | Great documentation
:heavy_check_mark: [NixOS](https://nixos.org/) | Nix (independent) | No | [Has the most packages](https://repology.org/repositories/statistics/total "Repology.org"); clean config

### [Display Server](https://en.wikipedia.org/wiki/Windowing_system#Display_server_communications_protocols "Wikipedia") & Window Manager
X11 will be replaced by Wayland.
Compositing <br> Window Manager | Minimal <br> Eyecandy | Comments 
-|-|-
[Qtile](https://qtile.org/) | Neither | Written in Python
[Sway](https://swaywm.org/) | Neither
[dwl](https://codeberg.org/dwl/dwl) | Minimal | dwm fork
[SwayFX](https://github.com/WillPower3309/swayfx) | Eyecandy | Inferior to Hyprland?
[river](https://codeberg.org/river/river) | Minimal | Lacking wiki
:heavy_check_mark: [Hyprland](https://hyprland.org/) | Eyecandy |  Great wiki

### [Shell](https://wiki.archlinux.org/title/command-line_shell#List_of_shells "Arch Wiki")
A *shell* converts human commands to something the kernel understands. Use `$ echo $SHELL` to see the current shell. NixOS by default uses Bourne-Again shell (bash). Popular modern shells: 
* Friendly Interactive Shell (fish)
* :heavy_check_mark: Z Shell (zsh)

### Terminal Emulator
Terminals provide access to the shell. The TTY (*TeleTYpe* informally, *virtual terminal* formally, *framebuffer terminal* functionally; switch between TTYs using <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>F#</kbd>) does not support copy and paste, panels, scrolling, multitasking with multiple windows, etc... Therefore, a non-framebuffer terminal emulator is useful for using commands without having to switch out of the graphical environment.
* [Alacritty](https://alacritty.org/): A cross-platform, OpenGL terminal emulator.
* [Foot](https://codeberg.org/dnkl/foot): A fast, lightweight and minimalistic Wayland terminal emulator.
* [Terminator](https://gnome-terminator.org/): Multiple GNOME terminals in one window!
* [WezTerm](https://wezfurlong.org/wezterm/): A GPU-accelerated cross-platform terminal emulator and multiplexer written by @wez and implemented in Rust.
* :heavy_check_mark: [kitty](https://sw.kovidgoyal.net/kitty/index.html): The fast, feature-rich, GPU based terminal emulator.

Not included in Home Manager option documentation:
* [Konsole](https://konsole.kde.org/): A powerful and customizable terminal emulator made by KDE.
* [MLTERM](https://github.com/arakiken/mlterm): Multi Lingual TERMinal emulator.
* [st](https://st.suckless.org/): A simple terminal implementation for X.
* [Warp](https://www.warp.dev/): The terminal reimagined with AI and collaborative tools for better productivity.
* [Contour](https://contour-terminal.org/): A modern & actually fast Terminal Emulator.
* [Darktile](https://github.com/liamg/darktile): A GPU rendered terminal emulator designed for tiling window managers.

Not in nixpkgs:
* [Extraterm](https://extraterm.org/): The swiss army chainsaw of terminal emulators.
* [Tabby](https://tabby.sh/): A terminal for the modern age.

### [Web Engine](https://eylenburg.github.io/browser_engines.htm "Eylenburg.github.io") & [Browser](https://en.wikipedia.org/wiki/Web_browser#:~:text=hide-,Active,-Blink%2Dbased "Wikipedia")
* Blink: Chromium
* QtWebEngine (Chromium): Qutebrowser
* :heavy_check_mark: Gecko: Firefox 

Other web engines have outdated browsers.\
Text based browsers are interesting but impractical.\
Forks of Firefox or Chromium are generally inferior. Edge, Brave, and Opera are modern but bloated.

### Cursor Theme
Numix, Gruppled, [Graphite](https://github.com/vinceliuice/Graphite-cursors), [Afterglow (recolored)](https://github.com/TeddyBearKilla/Afterglow-Cursors-Recolored), [McMojave](https://github.com/vinceliuice/McMojave-cursors), Breeze Hacked, Comix, [Bibata](https://github.com/ful1e5/Bibata_Cursor), Google inspired, [Phinger](https://github.com/phisch/phinger-cursors), Quintom, Whitesur, Vimix, Catppuccin, [Vanilla DMZ](https://www.gnome-look.org/p/999970/), OpenZone, Hackneyed, Borealis, Nordzy, [Simp1e](https://www.gnome-look.org/p/1932768), Volantes, :heavy_check_mark: [Capitaine](https://github.com/keeferrourke/capitaine-cursors/), ...

### Wallpaper Manager
Wayland wallpaper managers (all in nixpkgs):
Manager | Animated | Transitions | Home <br> Manager
-|-|-|-
[swaybg](https://github.com/swaywm/swaybg) | ? | ? | No
[mpvpaper](https://github.com/GhostNaN/mpvpaper) | MPV | ? | No
[Wallutils](https://github.com/xyproto/wallutils) | No | Yes | No
[wbg](https://codeberg.org/dnkl/wbg) | No | No | No
[hyprpaper](https://github.com/hyprwm/hyprpaper) | No | No | Yes
[wpaperd](https://github.com/danyspin97/wpaperd) | No | Cross Fade | Yes
:heavy_check_mark: [swww](https://github.com/LGFae/swww) | GIF | Yes | No (CLI)

## Installing NixOS

Installing NixOS minimal (no GNOME or KDE) on an HP ZHAN 66 Pro 14 G2:

1. Download NixOS minimal [ISO image](https://nixos.org/download/#:~:text=without%20a%20desktop.-,Minimal%20ISO%20image,-The%20minimal%20installation "NixOS.org").

1. Use [balenaEtcher](https://etcher.balena.io/#download-etcher) to flash the .iso to a USB.

1. Plug the USB into the laptop and turn on the laptop.\
   Spam <kbd>esc</kbd> while booting to open the HP startup menu.\
   [Disable secure boot](https://support.hp.com/us-en/document/ish_6930187-6931079-16#:~:text=Secure%20Boot%20settings%20for%20commercial%20notebooks%20and%20workstations "HP Support").\
   Select boot from USB in Boot Menu (<kbd>F9</kbd>).

1. Follow [manual](https://nixos.org/manual/nixos/stable/#sec-installation-manual "NixOS Manual - Manual Installation"): Networking (use following commands).\
   `# systemctl start wpa_supplicant`\
   `# wpa_cli`\
   `> add_network` (`0` should appear)\
   `> set_network 0 ssid "CU_FS6D"` (network called `CU_FS6D`)\
   `> set_network 0 psk "redacted"` (using password `redacted` for    `CU_FS6D`)\
   `> set_network 0 key_mgmt WPA-PSK`\
   `> enable_network 0`\
   If something like `<3>CTRL-EVENT-CONNECTED - Connection to 32:85:ab:ef:24:5c completed [id=0 id_str=]` appears, then the laptop has connection to the internet. Leave `wpa_cli` using `> quit`.\
   Note: Also use `# ping www.baidu.com` to test the internet connection. Use <kbd>ctrl</kbd>+<kbd>c</kbd> to quit `ping`.

1. Follow [manual](https://nixos.org/manual/nixos/stable/#sec-installation-manual-partitioning "NixOS Manual - Partitioning and formatting"): Partitioning.\
   Turns out my laptop only has a single SSD drive, which means I have to install Linux and keep Windows on the same drive; I have to *dual boot* Windows 10 and Linux if I want to keep Windows. I could also [install Linux on a USB](https://www.reddit.com/r/linuxquestions/comments/romnib/comment/hpzbpnt/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button "Reddit"), but that seems iffy.\
   I ditch this installation and boot into Windows to [create a partition](https://youtu.be/GXxTxBPKecQ?t=115&si=hTMWLO_NkSU4OVR2 "YouTube") for Linux on the same drive as Windows.\
   Note: To launch the Windows 10 partitioning software, search in Windows "创建并格式换硬盘分区".\
   I set up partitions. Windows displays that my drive has 476.92GB total (Why is it not 512GB?).
   * Before:
      1. 260MB: EFI系统分区
      1. Windows (C:)
      1. 930MB: 恢复分区
   * After:
      1. 260MB: EFI系统分区
      1. 243.82GB: Windows (C:)
      1. 231.93GB: 未分配
      1. 930MB: 恢复分区

1. Boot into Linux and follow manual to partitioning again.\
   `/dev/sda` is my USB; `/dev/nvme0n1` is my SSD drive. Using `# parted /dev/nvme0n1 print` only shows non-free partitions, which are all numbered and named. Using `# parted /dev/nvme0n1 print free` shows free or 未分配 partitions:
   ```
   Model: INTEL SSDPEKNW512G8H (nvme)
   Disk /dev/nvme0n1: 512GB
   Sector size (logical/physical): 512GB/512GB
   Partition Table: gpt
   Disk Flags:

   Number  Start   End     Size    File system  Name                          Flags
           17.4kB  1049kB  1031kB  Free Space
    1      1049kB  274MB   273MB   fat32        EFI system partition          boot, esp, no_automount
    2      274MB   290MB   16.8MB               Microsoft reserved partition  msftres, no_automount
    3      290MB   262GB   262GB   ntfs         Basic data partition          msftdata
           262GB   511GB   249GB   Free Space
    4      511GB   512GB   975MB   ntfs         Basic data partition          hidden, diag, no_automount
           512GB   512GB   5578kB  Free Space
   ```
   This shows that the 未分配 partition I created is the Free Space after number 3 with apparently 249GB. From here on, I have to slightly deviate from the NixOS manual, which assumes a clean SATA ([`/dev/sda`](https://unix.stackexchange.com/questions/510778/linux-block-devices-naming "StackExchange")) drive; I have an NVMe drive with Windows 10 and some partitions already configured. The manual recommends:
   1. GPT partition table: `# parted /dev/sda -- mklabel gpt`
   1. A *boot* partition (EFI system partition) of 512MiB at the start of the drive: `# parted /dev/sda -- mkpart ESP fat32 1MB 512MB` and `# parted /dev/sda -- set 3 esp on`
   1. A *swap* (extended RAM) partition of 8GB at the end of the drive: `# parted /dev/sda -- mkpart swap linux-swap -8GB 100%`
   1. A *root* partition as large as possible in between: `# parted /dev/sda -- mkpart root ext4 512MB -8GB`
   
   Since `/dev/nvme0n1` already has partition table: gpt, I can skip step 1.\
   Since [I know I'm using UEFI](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/configure-uefigpt-based-hard-drive-partitions?view=windows-11#:~:text=When%20you%20deploy%20Windows%20to%20a%20UEFI%2Dbased%20device%2C%20you%20must%20format%20the%20hard%20drive%20that%20includes%20the%20Windows%20partition%20by%20using%20a%20GUID%20partition%20table%20(GPT)%20file%20system.%20Additional%20drives%20may%20use%20either%20the%20GPT%20or%20the%20master%20boot%20record%20(MBR)%20file%20format. "Microsoft Learn"), and [UEFI has only 1 EFI system partition](https://www.reddit.com/r/linuxquestions/comments/t7ypx8/comment/hzkpagr/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button "Reddit"), and Windows already created that partition with an *esp* flag, I can completely skip step 2.\
   I use `# parted /dev/nvme0n1 -- mkpart root ext4 262GB -10GB` for creating the root partition.\
   I use `# parted /dev/nvme0n1 -- mkpart swap linux-swap -10GB 510GB` for creating the swap partition.\
   Note: Partition 4 created by Windows (Basic data partition) is likely the Windows recovery partition, so I left 1GB of margin for error to make sure it doesn't get messed up; I use `510GB` instead of `511GB` for the swap partition.\
   After partitioning, `# parted /dev/nvme0n1 print free` shows (header incomplete):
   ```
   Number  Start   End     Size    File system  Name                          Flags
           17.4kB  1049kB  1031kB  Free Space
    1      1049kB  274MB   273MB   fat32        EFI system partition          boot, esp, no_automount
    2      274MB   290MB   16.8MB               Microsoft reserved partition  msftres, no_automount
    3      290MB   262GB   262GB   ntfs         Basic data partition          msftdata
    5      262GB   502GB   240GB                root
    6      502GB   510GB   7889MB               swap                          swap
           510GB   511GB   1129MB  Free Space
    4      511GB   512GB   975MB   ntfs         Basic data partition          hidden, diag, no_automount
           512GB   512GB   5578kB  Free Space
   ```

1. Follow [manual](https://nixos.org/manual/nixos/stable/#sec-installation-manual-partitioning-formatting "NixOS Manual - Formatting"): Formatting.\
   I use `# mkfs.ext4 -L nixos /dev/nvme0n1p5` to my format my root partition (number 5).\
   I use `# mkswap -L swap /dev/nvme0n1p6` to format my swap partition (number 6).\
   Note: I still use `-L` to label the partitions even though they already have names because filesystem labels are different from partition names. Filesystem labels are used to mount partitions in the next step.\
   Note: Boot partition (EFI system partition; number 1) is already formatted.\
   After formatting, `# parted /dev/nvme0n1 print free` shows (incomplete):
   ```
   Number  Start  End    Size    File system     Name  Flags
    5      262GB  502GB  240GB   ext4            root
    6      502GB  510GB  7889MB  linux-swap(v1)  swap  swap
   ```

1. Follow [manual](https://nixos.org/manual/nixos/stable/#sec-installation-manual-installing "NixOS Manual - Installing"): Mounting.\
   Note: Saying "*mount A to B*" means "*make the contents of A accessible at location B*".\
   I use `# mount /dev/disk/by-label/nixos /mnt` to mount my root partition to `/mnt`, which exists by default in the root filesystem of my *live environment*, which is a complete but temporary OS running in RAM using read-only storage in the USB. Use `# ls /` (`/` is the root filesystem) to see `mnt`: `bin  dev  etc  home  iso  mnt  nix  proc  root  run  srv  sys  tmp  usr  var`. Here, the `mount` command creates a "bridge" between the partition on the disk and the live environment. After installation, the live environment "dies", meaning the temporary OS along with its files won't be accessible anymore. Also, the command uses the filesystem label; for me, it is equivalent to `# mount /dev/nvme0n1p5 /mnt`.\
   I use `# mkdir -p /mnt/boot` then `# mount -o umask=077 /dev/nvme0n1p1 /mnt/boot` to mount Windows' EFI system partition to `/mnt/boot`. [`-o umask=077`](https://en.wikipedia.org/wiki/Umask#Command_line_examples "Wikipedia") specifies an option that sets the permission for the newly created directory; 077 means that the owner has full permissions (read, write, execute), and no permissions for everyone else (this only affects Linux, not Windows). I could maybe use `# mount -o umask=077 /dev/disk/by-label/boot /mnt/boot`, but I do not know for sure if Windows' boot partition has the filesystem label `boot`.\
   I use `# swapon /dev/disk/by-label/swap` to enable swap. Equivalent to `# swapon /dev/nvme0n1p6` for me.

1. Follow [manual](https://nixos.org/manual/nixos/stable/#sec-installation-manual-installing "NixOS Manual - Installing"): Configure NixOS and install.\
   Generate the NixOS configuration file using `# nixos-generate-config --root /mnt`.\
   Note: Using `# ls /mnt/etc/nixos` now shows `configuration.nix  hardware-configuration.nix`.\
   Edit the NixOS configuration using `# nano /mnt/etc/nixos/configuration.nix`.\
   I'm using UEFI, and `boot.loader.systemd-boot.enable = true;` and `boot.loader.efi.canTouchEfiVariables = true;` have already been automatically uncommented, so I don't have to change that.\
   Uncomment or edit:
   ```nix
   { config, lib, pkgs, ... }:

   {
     imports =
       [
         ./hardware-configuration.nix
       ];
   
     boot.loader = {
       systemd-boot.enable = true;
       efi.canTouchEfiVariables = true;
     };

     networking = {
       hostName = "ZHAN";
       networkmanager.enable = true;
     };

     time.timeZone = "America/New_York";

     services = {
       libinput.enable = true;
     };

     users = {
       users.tim = {
         isNormalUser = true;
         extraGroups = [ "wheel" "networkmanager" ];
       };
     };

     system.stateVersion = "24.05";
   }
   ```
   Press <kbd>ctrl</kbd>+<kbd>o</kbd>, <kbd>enter</kbd>, and <kbd>ctrl</kbd>+<kbd>x</kbd> to save `configuration.nix` and exit `nano`.\
   Install NixOS using `# nixos-install`. Wait for a few minutes.\
   Set the root password as prompted.\
   Reboot using `# reboot`.\
   Reboot automatically booted into Windows 10. Shutdown and turn on laptop to access HP startup menu again.\
   Select "UEFI - Linux Boot Manager" from Boot Menu (<kbd>F9</kbd>).

1. Login to NixOS by typing `root` for `ZHAN login:` and my root password for `Password:`.\
   Use `# passwd tim` to set the password for `tim` as prompted. 

Done! Unplug the USB.\
[Revert bootable USB to storage USB](https://blog.balena.io/did-etcher-break-my-usb-sd-card/ "Balena Blog").

## Using NixOS

### Connecting to the Internet
Using `# systemctl start wpa_supplicant` and then `# wpa_cli` doesn't work anymore. `Could not connect to wpa_supplicant: (nil) - re-trying`. This is probably because in `configuration.nix`:
```nix
# Pick only one of the below networking options.
# networking.wireless.enable = true;
networking.networkmanager.enable = true; # Easiest to use and most distros use this by default.
```
Anyways, since `networking.networkmanager.enable = true;` was uncommented, I can use that.
* Use `$ nmcli device wifi list` to list available wifi.
* Use `$ nmcli device wifi connect "CU_FS6D" password "redacted"` to connect.\
Seems like it automatically connects at each boot.

### Using [Flakes](https://nix.dev/manual/nix/2.18/command-ref/new-cli/nix3-flake "Nix Reference Manual") (and the [new CLI](https://nixos-and-flakes.thiscute.world/nixos-with-flakes/introduction-to-flakes#the-new-cli-and-the-classic-cli "NixOS & Flakes Book"))
[Nixpkgs](https://github.com/NixOS/nixpkgs/tree/nixos-unstable "GitHub") is the git repository containing many packages. A *[channel](https://nixos.wiki/wiki/Nix_channels "NixOS Wiki")* is a branch of a repository such as nixpkgs; the current nixpkgs stable channel is 24.05. Use `# nix-channel --list` to see `nixos https://nixos.org/channels/nixos-24.05`; my NixOS is currently following the nixpkgs stable channel. Before flakes existed, packages in NixOS had to be *imperatively* (opposite of *declaratively*) updated through using commands like `# nix-channel --update`, and using commands was required for adding new channels to use and update packages outside the nixpkgs repository (such as Home Manager with commands like `nix-channel --add https://github.com/branch-of-home-manager`).

Great resources for understanding flakes:
* [Nix flakes explained](https://youtu.be/S3VBi6kHw5c "YouTube"): Using flakes to create a nix shell.
* [Ultimate NixOS Guide | Flakes | Home-manager](https://www.youtube.com/watch?v=a67Sv4Mbxmc&t=360s "YouTube"): Advantages of flakes and using flakes to configure NixOS.
* [NixOS with Flakes](https://nixos-and-flakes.thiscute.world/nixos-with-flakes/nixos-with-flakes-enabled "NixOS & Flakes Book"): General guides for flakes, modules, and Home Manager.
* [Intro Flake Config Setup for New NixOS Users](https://librephoenix.com/2023-10-21-intro-flake-config-setup-for-new-nixos-users#org990add0 "LibrePhoenix's Tech Nest Blog"): Structure and syntax of a flake explained.

Nix is the programming language used primarily by NixOS. Flakes are simply Nix programs (`flake.nix` files) that have specific agreed upon structures making them do specific things. They all have *input* and *output* parts. This [flake template](https://github.com/NixOS/templates/blob/master/full/flake.nix "GitHub") lists common inputs and outputs and their use cases. Briefly speaking:
* [Inputs](https://nixos-and-flakes.thiscute.world/other-usage-of-flakes/inputs "NixOS & Flakes Book") can be git repositories, local paths, or other flakes.
* [Outputs](https://nixos-and-flakes.thiscute.world/other-usage-of-flakes/outputs "NixOS & Flakes Book") can be pretty much anything; some are recognized and used by NixOS.

`flake.lock` files are automatically created with `flake.nix` files. `flake.lock` files store information about the exact versions of the input(s) at the time the lock file was created (or updated). Therefore, the outputs of `flake.nix` with `flake.lock` are *deterministic* and *reproducible* since the inputs are *locked*.\
An output for flakes used by NixOS is `nixosConfigurations`. So, I can declaratively set a flake's input as the nixpkgs unstable channel and its output as OS configurations. The `flake.lock` file generated with this flake specifies the version of the channel. I can use [`# nix flake update`](https://nix.dev/manual/nix/2.18/command-ref/new-cli/nix3-flake-update#name "Nix Reference Manual") to update the `flake.lock` file; I no longer use `# nix-channel --update`.

Enable flakes for NixOS:
1. Flakes is still an experimental feature; enable it by adding in `configuration.nix`:
   ```diff
   { config, lib, pkgs, ... }:

   {
     imports =
       [
         ./hardware-configuration.nix
       ];

     boot.loader = {
       # ...
     };
     
   + nix.settings.experimental-features = [ "nix-command" "flakes" ];

     networking = {
       # ...
     };

     time.timeZone = "America/New_York";

     services = {
       # ...
     };

     users = {
       # ...
     };

   + programs = {
   +   git.enable = true;
   + };

     system.stateVersion = "24.05";
   }
   ```
1. Connect to internet. Use `# nixos-rebuild switch`.

Switch system configuration to a flake:
1. Use `$ cd /etc/nixos` then [`# nix flake init`](https://nix.dev/manual/nix/2.18/command-ref/new-cli/nix3-flake-init#name "Nix Reference Manual") to create or initialize a flake file in `/etc/nixos`.\
   Note: Use `$ ls` to see `configuration.nix  flake.nix  hardware-configuration.nix`.
1. Edit `flake.nix`:
   ```nix
   {
     description = "NixOS configuration flake";

     inputs = {
       nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
     };

     outputs = { self, nixpkgs, ... }: {
       nixosConfigurations.ZHAN = nixpkgs.lib.nixosSystem {
         system = "x86_64-linux";
         modules = [
           ./configuration.nix
         ];
       };
     };
   }
   ```
   The input is the nixpkgs unstable channel, the git repository. The output is `nixosConfigurations` of `ZHAN`. `ZHAN` is my hostname; with "flakes" experimental feature enabled, [`# nixos-rebuild switch`](https://nixos.wiki/wiki/Nixos-rebuild#with_Flakes "NixOS Wiki") by default looks for the file `/etc/nixos/flake.nix` and builds the `nixosConfigurations` item matching the current hostname of the OS. To specify a different flake directory and hostname, use `# nixos-rebuild switch --flake /path/to/flake#hostname`. `configuration.nix` is included; `.` is a navigation shortcut for the current directory (on a side note, `..` is the *parent* directory).
1. Connect to internet. Use `# nixos-rebuild switch`. Wait a few minutes.\
   A `flake.lock` file is generated in `/etc/nixos`; use `$ ls` to see `configuration.nix  flake.lock  flake.nix  hardware-configuration.nix`.

### Installing [Home Manager](https://nix-community.github.io/home-manager/index.xhtml#ch-introduction "Home Manager Manual")
Files or directories that have names beginning with `.` like the directory `/home/tim/.config/` are called *dotfiles*. Dotfiles are hidden by default; use `$ ls -a` to see them. Dotfiles typically store configuration settings.\
Home Manager translates `.nix` files to dotfiles and creates *symlinks* (similar to shortcuts in Windows) for the dotfiles for programs like Firefox and Hyprland to use. This allows me to declare configurations for user specific programs with `.nix` files so I don't have to edit dotfiles, just like how I declare settings in `configuration.nix` for the OS. Home Manager also supports rollbacks.\
Note: Home Manager can be used to declare or install packages for specific users, but that's [not useful](https://discourse.nixos.org/t/why-does-home-manager-also-have-an-option-to-install-user-packages/33982 "NixOS Help") for me.\
Home Manager can be installed [2 different ways](https://www.youtube.com/watch?v=IiyBeR-Guqw&t=198s "YouTube") in NixOS:
* Standalone: Manage dotfiles independent from the OS. No root permission required. Works on other Linux distributions.
* NixOS Module: Manage dotfiles through the OS for all users. Root permission required.

Install Home Manager as a NixOS module:
1. Edit `flake.nix`:
   ```diff
   {
     description = "NixOS configuration flake";
   
     inputs = {
       nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
       
   +   home-manager.url = "github:nix-community/home-manager";
   +   home-manager.inputs.nixpkgs.follows = "nixpkgs";
     };
   
   - outputs = { self, nixpkgs, ... }: {
   + outputs = { self, nixpkgs, home-manager, ... }: {
       nixosConfigurations.ZHAN = nixpkgs.lib.nixosSystem {
         system = "x86_64-linux";
         modules = [
           ./configuration.nix
   +       home-manager.nixosModules.home-manager
   +       {
   +         home-manager.useGlobalPkgs = true;
   +         home-manager.useUserPackages = true;
   +         home-manager.users.tim = import ./home.nix;
   +       }
         ];
       };
     };
   }
   ```
   Since Home Manager [isn't](https://discourse.nixos.org/t/why-isnt-more-of-home-manager-merged-into-nixpkgs/6096/12 "NixOS Help") part of the nixpkgs repository, it is installed through adding its channel in the inputs of the flake. `home-manager.inputs.nixpkgs.follows = "nixpkgs";` [reduces](https://drakerossman.com/blog/how-to-add-home-manager-to-nixos#how-to-add-home-manager-to-your-system:~:text=The%20home%2Dmanager,scenario%20is%20unlikely "Drake Rossman's Website") the number of inputs the flake depends on; packages installed through Home Manager will still be installed from the same `nixos-unstable` branch used for `configuration.nix`. [`useGlobalPkgs`](https://nix-community.github.io/home-manager/nixos-options.xhtml#nixos-opt-home-manager.useGlobalPkgs "Home Manager Manual") and [`useUserPackages`](https://nix-community.github.io/home-manager/nixos-options.xhtml#nixos-opt-home-manager.useUserPackages "Home Manager Manual") explained [here](https://nix-community.github.io/home-manager/index.xhtml#sec-install-nixos-module "Home Manager Manual").
1. Create and edit `/etc/nixos/home.nix` (unlike non-flake setups, `home.nix` must be present [before](https://nix-community.github.io/home-manager/index.xhtml#sec-flakes-prerequisites "Home Manager Manual") the flake is built):
   ```nix
   { config, lib, pkgs, ... }:
   
   {
     home = {
       username = "tim";
       homeDirectory = "/home/tim";
       stateVersion = "24.05";
     };

     programs.home-manager.enable = true;
   }
   ```
1. Connect to internet. Use `# nixos-rebuild switch`.\
   `flake.lock` is automatically updated and now contains version information about both `nixpkgs` and `home-manager`.\
   See [available options](https://nix-community.github.io/home-manager/options.xhtml "Home Manager Manual") to edit `home.nix`.

### iwlwifi Boot Bug (Jul 8, 2024)
Problem:
* During boot, error messages appear (filtered to only `iwlwifi`):
   <details><summary>Messages</summary>

   ```
   [    5.962536] iwlwifi 0000:00:14.3: enabling device (0000 -> 0002)
   [    5.963629] iwlwifi 0000:00:14.3: Detected crf-id 0x2816, cnv-id 0x1000100 wfpm id 0x80000000
   [    5.963635] iwlwifi 0000:00:14.3: PCI dev 9df0/0034, rev=0x312, rfid=0x105110
   [    5.980414] iwlwifi 0000:00:14.3: WRT: Overriding region id 0
   [    5.980417] iwlwifi 0000:00:14.3: WRT: Overriding region id 1
   [    5.980419] iwlwifi 0000:00:14.3: WRT: Overriding region id 2
   [    5.980420] iwlwifi 0000:00:14.3: WRT: Overriding region id 3
   [    5.980421] iwlwifi 0000:00:14.3: WRT: Overriding region id 4
   [    5.980422] iwlwifi 0000:00:14.3: WRT: Overriding region id 6
   [    5.980423] iwlwifi 0000:00:14.3: WRT: Overriding region id 8
   [    5.980424] iwlwifi 0000:00:14.3: WRT: Overriding region id 9
   [    5.980425] iwlwifi 0000:00:14.3: WRT: Overriding region id 10
   [    5.980426] iwlwifi 0000:00:14.3: WRT: Overriding region id 11
   [    5.980427] iwlwifi 0000:00:14.3: WRT: Overriding region id 15
   [    5.980428] iwlwifi 0000:00:14.3: WRT: Overriding region id 16
   [    5.980429] iwlwifi 0000:00:14.3: WRT: Overriding region id 18
   [    5.980430] iwlwifi 0000:00:14.3: WRT: Overriding region id 19
   [    5.980431] iwlwifi 0000:00:14.3: WRT: Overriding region id 20
   [    5.980432] iwlwifi 0000:00:14.3: WRT: Overriding region id 21
   [    5.980433] iwlwifi 0000:00:14.3: WRT: Overriding region id 28
   [    5.980875] iwlwifi 0000:00:14.3: loaded firmware version 46.7e3e4b69.0 9000-pu-b0-jf-b0-46.ucode op_mode iwlmvm
   [    6.495945] iwlwifi 0000:00:14.3: Detected Intel(R) Wireless-AC 9560 160MHz, REV=0x312
   [   11.906805] iwlwifi 0000:00:14.3: Failed to load firmware chunk!
   [   11.906930] iwlwifi 0000:00:14.3: iwlwifi transaction failed, dumping registers
   [   11.906975] iwlwifi 0000:00:14.3: iwlwifi device config registers:
   [   11.907150] iwlwifi 0000:00:14.3: 00000000: 9df08086 00100406 02800011 00800000 f4210004 00000000 00000000 00000000
   [   11.907205] iwlwifi 0000:00:14.3: 00000020: 00000000 00000000 00000000 00348086 00000000 000000c8 00000000 000001ff
   [   11.907259] iwlwifi 0000:00:14.3: 00000040: 00928010 10000ec0 00100c10 00000000 00000000 00000000 00000000 00000000
   [   11.907336] iwlwifi 0000:00:14.3: 00000060: 00000000 00080812 00000405 00000000 00000000 00000000 00000000 00000000
   [   11.907389] iwlwifi 0000:00:14.3: 00000080: 000f0011 00002000 00003000 00000000 00000000 00000000 00000000 00000000
   [   11.907441] iwlwifi 0000:00:14.3: 000000a0: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
   [   11.907494] iwlwifi 0000:00:14.3: 000000c0: 00000000 00000000 c823d001 0d000008 00814005 fee00478 00000000 00000000
   [   11.907546] iwlwifi 0000:00:14.3: 000000e0: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
   [   11.907599] iwlwifi 0000:00:14.3: 00000100: 14c00000 ff000000 000000ff 00462031 00000000 00002000 00000000 00000000
   [   11.907652] iwlwifi 0000:00:14.3: 00000120: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
   [   11.907704] iwlwifi 0000:00:14.3: 00000140: 00000000 00000000 00000000 16410018 00000000 0001001e 00481e1f 00000000
   [   11.907755] iwlwifi 0000:00:14.3: iwlwifi device memory mapped registers:
   [   11.907814] iwlwifi 0000:00:14.3: 00000000: 18c89002 00000040 00000000 08000000 00000000 00000000 00000000 00000000
   [   11.907868] iwlwifi 0000:00:14.3: 00000020: 00000010 0c000005 00000312 d55555d5 d55555d5 d55555d5 80008040 001f0042
   [   11.907946] iwlwifi 0000:00:14.3: Could not load the [0] uCode section
   [   11.907991] iwlwifi 0000:00:14.3: Failed to start INIT ucode: -110
   [   11.908029] iwlwifi 0000:00:14.3: WRT: Collecting data: ini trigger 13 fired (delay=0ms).
   [   12.158282] iwlwifi 0000:00:14.3: Not valid error log pointer 0x00000000 for Init uCode
   [   12.158301] iwlwifi 0000:00:14.3: IML/ROM dump:
   [   12.158308] iwlwifi 0000:00:14.3: 0x00000003 | IML/ROM error/state
   [   12.158339] iwlwifi 0000:00:14.3: 0x00000001 | IML/ROM data1
   [   12.158350] iwlwifi 0000:00:14.3: Fseq Registers:
   [   12.158374] iwlwifi 0000:00:14.3: 0x14163D33 | FSEQ_ERROR_CODE
   [   12.158383] iwlwifi 0000:00:14.3: 0x00000000 | FSEQ_TOP_INIT_VERSION
   [   12.158393] iwlwifi 0000:00:14.3: 0xA538284A | FSEQ_CNVIO_INIT_VERSION
   [   12.158402] iwlwifi 0000:00:14.3: 0x0000A384 | FSEQ_OTP_VERSION
   [   12.158412] iwlwifi 0000:00:14.3: 0x371909C7 | FSEQ_TOP_CONTENT_VERSION
   [   12.158421] iwlwifi 0000:00:14.3: 0xB6FEED1F | FSEQ_ALIVE_TOKEN
   [   12.158430] iwlwifi 0000:00:14.3: 0x6565DF70 | FSEQ_CNVI_ID
   [   12.158439] iwlwifi 0000:00:14.3: 0xA4EAB9C6 | FSEQ_CNVR_ID
   [   12.158448] iwlwifi 0000:00:14.3: 0x01000100 | CNVI_AUX_MISC_CHIP
   [   12.158460] iwlwifi 0000:00:14.3: 0x01300202 | CNVR_AUX_MISC_CHIP
   [   12.158838] iwlwifi 0000:00:14.3: 0x0000485B | CNVR_SCU_SD_REGS_SD_REG_DIG_DCDC_VTRIM
   [   12.159245] iwlwifi 0000:00:14.3: 0xA5A5A5A2 | CNVR_SCU_SD_REGS_SD_REG_ACTIVE_VDIG_MIRROR
   [   12.159658] iwlwifi 0000:00:14.3: 0x3BF53F5D | FSEQ_PREV_CNVIO_INIT_VERSION
   [   12.160056] iwlwifi 0000:00:14.3: 0xE6DA90F4 | FSEQ_WIFI_FSEQ_VERSION
   [   12.160471] iwlwifi 0000:00:14.3: 0x50154F5B | FSEQ_BT_FSEQ_VERSION
   [   12.160847] iwlwifi 0000:00:14.3: 0x6543892F | FSEQ_CLASS_TP_VERSION
   [   12.653870] iwlwifi 0000:00:14.3: Master Disable Timed Out, 100 usec
   [   12.665455] iwlwifi 0000:00:14.3: Failed to run INIT ucode: -110
   [   12.678376] iwlwifi 0000:00:14.3: retry init count 0
   [   12.679991] iwlwifi 0000:00:14.3: Detected Intel(R) Wireless-AC 9560 160MHz, REV=0x312
   [   18.050795] iwlwifi 0000:00:14.3: Failed to load firmware chunk!
   [   18.052671] iwlwifi 0000:00:14.3: Could not load the [0] uCode section
   [   18.054516] iwlwifi 0000:00:14.3: Failed to start INIT ucode: -110
   [   18.056094] iwlwifi 0000:00:14.3: WRT: Collecting data: ini trigger 13 fired (delay=0ms).
   [   18.305373] iwlwifi 0000:00:14.3: Not valid error log pointer 0x00000000 for Init uCode
   [   18.305769] iwlwifi 0000:00:14.3: IML/ROM dump:
   [   18.306161] iwlwifi 0000:00:14.3: 0x00000003 | IML/ROM error/state
   [   18.306594] iwlwifi 0000:00:14.3: 0x00000001 | IML/ROM data1
   [   18.307015] iwlwifi 0000:00:14.3: Fseq Registers:
   [   18.307461] iwlwifi 0000:00:14.3: 0x14163D33 | FSEQ_ERROR_CODE
   [   18.307884] iwlwifi 0000:00:14.3: 0x00000000 | FSEQ_TOP_INIT_VERSION
   [   18.308271] iwlwifi 0000:00:14.3: 0xA538284A | FSEQ_CNVIO_INIT_VERSION
   [   18.308696] iwlwifi 0000:00:14.3: 0x0000A384 | FSEQ_OTP_VERSION
   [   18.309121] iwlwifi 0000:00:14.3: 0x371909C7 | FSEQ_TOP_CONTENT_VERSION
   [   18.309558] iwlwifi 0000:00:14.3: 0xB6FEED1F | FSEQ_ALIVE_TOKEN
   [   18.309980] iwlwifi 0000:00:14.3: 0x6565DF70 | FSEQ_CNVI_ID
   [   18.310400] iwlwifi 0000:00:14.3: 0xA4EAB9C6 | FSEQ_CNVR_ID
   [   18.310821] iwlwifi 0000:00:14.3: 0x01000100 | CNVI_AUX_MISC_CHIP
   [   18.311207] iwlwifi 0000:00:14.3: 0x01300202 | CNVR_AUX_MISC_CHIP
   [   18.311646] iwlwifi 0000:00:14.3: 0x0000485B | CNVR_SCU_SD_REGS_SD_REG_DIG_DCDC_VTRIM
   [   18.312098] iwlwifi 0000:00:14.3: 0xA5A5A5A2 | CNVR_SCU_SD_REGS_SD_REG_ACTIVE_VDIG_MIRROR
   [   18.312526] iwlwifi 0000:00:14.3: 0x3BF53F5D | FSEQ_PREV_CNVIO_INIT_VERSION
   [   18.312939] iwlwifi 0000:00:14.3: 0xE6DA90F4 | FSEQ_WIFI_FSEQ_VERSION
   [   18.313313] iwlwifi 0000:00:14.3: 0x50154F5B | FSEQ_BT_FSEQ_VERSION
   [   18.313741] iwlwifi 0000:00:14.3: 0x6543892F | FSEQ_CLASS_TP_VERSION
   [   18.510910] iwlwifi 0000:00:14.3: Master Disable Timed Out, 100 usec
   [   18.522493] iwlwifi 0000:00:14.3: Failed to run INIT ucode: -110
   [   18.535348] iwlwifi 0000:00:14.3: retry init count 1
   [   18.537039] iwlwifi 0000:00:14.3: Detected Intel(R) Wireless-AC 9560 160MHz, REV=0x312
   [   23.682797] iwlwifi 0000:00:14.3: Failed to load firmware chunk!
   [   23.684352] iwlwifi 0000:00:14.3: Could not load the [0] uCode section
   [   23.685890] iwlwifi 0000:00:14.3: Failed to start INIT ucode: -110
   [   23.688076] iwlwifi 0000:00:14.3: WRT: Collecting data: ini trigger 13 fired (delay=0ms).
   [   23.937339] iwlwifi 0000:00:14.3: Not valid error log pointer 0x00000000 for Init uCode
   [   23.937743] iwlwifi 0000:00:14.3: IML/ROM dump:
   [   23.938118] iwlwifi 0000:00:14.3: 0x00000003 | IML/ROM error/state
   [   23.938538] iwlwifi 0000:00:14.3: 0x00000001 | IML/ROM data1
   [   23.939130] iwlwifi 0000:00:14.3: Fseq Registers:
   [   23.939589] iwlwifi 0000:00:14.3: 0x14163D33 | FSEQ_ERROR_CODE
   [   23.939991] iwlwifi 0000:00:14.3: 0x00000000 | FSEQ_TOP_INIT_VERSION
   [   23.940395] iwlwifi 0000:00:14.3: 0xA538284A | FSEQ_CNVIO_INIT_VERSION
   [   23.940932] iwlwifi 0000:00:14.3: 0x0000A384 | FSEQ_OTP_VERSION
   [   23.941293] iwlwifi 0000:00:14.3: 0x371909C7 | FSEQ_TOP_CONTENT_VERSION
   [   23.941783] iwlwifi 0000:00:14.3: 0xB6FEED1F | FSEQ_ALIVE_TOKEN
   [   23.942136] iwlwifi 0000:00:14.3: 0x6565DF70 | FSEQ_CNVI_ID
   [   23.942526] iwlwifi 0000:00:14.3: 0xA4EAB9C6 | FSEQ_CNVR_ID
   [   23.943049] iwlwifi 0000:00:14.3: 0x01000100 | CNVI_AUX_MISC_CHIP
   [   23.943441] iwlwifi 0000:00:14.3: 0x01300202 | CNVR_AUX_MISC_CHIP
   [   23.943921] iwlwifi 0000:00:14.3: 0x0000485B | CNVR_SCU_SD_REGS_SD_REG_DIG_DCDC_VTRIM
   [   23.944328] iwlwifi 0000:00:14.3: 0xA5A5A5A2 | CNVR_SCU_SD_REGS_SD_REG_ACTIVE_VDIG_MIRROR
   [   23.944795] iwlwifi 0000:00:14.3: 0x3BF53F5D | FSEQ_PREV_CNVIO_INIT_VERSION
   [   23.945148] iwlwifi 0000:00:14.3: 0xE6DA90F4 | FSEQ_WIFI_FSEQ_VERSION
   [   23.945541] iwlwifi 0000:00:14.3: 0x50154F5B | FSEQ_BT_FSEQ_VERSION
   [   23.946069] iwlwifi 0000:00:14.3: 0x6543892F | FSEQ_CLASS_TP_VERSION
   [   24.143873] iwlwifi 0000:00:14.3: Master Disable Timed Out, 100 usec
   [   24.155544] iwlwifi 0000:00:14.3: Failed to run INIT ucode: -110
   [   24.169271] iwlwifi 0000:00:14.3: retry init count 2
   ```
   </details>
* After boot, using `$ nmcli device wifi list` shows nothing. 

Fix:
1. Enter HP startup menu.
1. Select BIOS Setup (<kbd>F10</kbd>).\
   Go to Advanced tab.\
   Select Built-In Device Options.\
   Uncheck Wireless Network Device (WLAN).
1. Boot into NixOS. No iwlwifi logs appear.
1. Reboot to enter HP startup menu again.
1. Check Wireless Network Device (WLAN).
1. Boot into NixOS again.\
   Wifi works again; using `$ nmcli device wifi list` shows that I am connected.

Possible cause:\
I did not completely shut down Windows 10 before booting into NixOS. Upon shutting down NixOS and booting into Windows 10, I see that Astrill VPN is still connected. So, Astrill VPN may have been connected while I first booted into NixOS; I disconnected Astrill VPN and shut down Windows 10, but upon booting into NixOS afterwards, the problem persisted. 

### Using Zsh
In `configuration.nix`, add:
```diff
{ config, lib, pkgs, ... }:

{
  imports =
    [
      ./hardware-configuration.nix
    ];

  boot.loader = {
    # ...
  };

  nix.settings.experimental-features = [ "nix-command" "flakes" ];

  networking = {
    # ...
  };

  time.timeZone = "America/New_York";

  services = {
    # ...
  };

  users = {
    users.tim = {
      # ...
    };
+   defaultUserShell = pkgs.zsh;
  };

  programs = {
    git.enable = true;

+   zsh = {
+     enable = true;
+     autosuggestions.enable = true;
+   };
  };

  system.stateVersion = "24.05";
}
```
Connect to internet. Use `# nixos-rebuild switch` and reboot. Use `$ echo $SHELL` to see `/run/current-system/sw/bin/zsh`.\
Navigate in the zsh menu to generate `/home/tim/.zshrc`:
```zsh
# Lines configured by zsh-newuser-install
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/tim/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
```
Since I don't need to further configure zsh (yet), I do not use Home Manager for zsh.

### Using [Hyprland](https://wiki.hyprland.org/ "Hyprland Wiki")
Hyprland can be installed 2 ways:
* From the branch of nixpkgs defined in the flake input.
* From the Hyprland git repository by defining a separate flake input.

Since I am following the `nixos-unstable` branch of nixpkgs, the Hyprland package from there will likely be up to date with Hyprland's own git repository; I do not have to define a separate flake input.\
Note: There is a distinction between installing a package, and enabling or configuring it. By default, declarations like `programs.hyprland.enable = true;` in `configuration.nix` and `wayland.windowManager.hyprland.enable = true;` in `home.nix` installs *and* enables Hyprland. However, if Hyprland is already installed, either through a nixpkgs branch or through Hyprland's own git repository, I can tell NixOS (`programs.hyprland.package = ...`) and Home Manager (`wayland.windowManager.hyprland.package = ...`) to use it. Since I am installing Hyprland from nixpkgs, I do not have to explicitly specify the package.\
Install Hyprland (and kitty) from nixpkgs for all users:
1. In `configuration.nix`, add:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];
   
     boot.loader = {
       # ...
     };

     nix.settings.experimental-features = [ "nix-command" "flakes" ];
   
     networking = {
       # ...
     };
   
     time.timeZone = "America/New_York";
   
     services = {
       # ...
     };
   
     users = {
       # ...
     };
   
   + environment = {
   +   systemPackages = with pkgs; [
   +     kitty
   +   ];
   +   sessionVariables.NIXOS_OZONE_WL = "1";
   + };

     programs = {
       git.enable = true;
   
       zsh = {
         # ...
       };

   +   hyprland.enable = true;
     };
   
     system.stateVersion = "24.05";
   }
   ```
   [kitty](https://search.nixos.org/packages?channel=24.05&show=kitty&from=0&size=50&sort=relevance&type=packages&query=kitty "NixOS.org Search") is the [default](https://wiki.hyprland.org/Getting-Started/Master-Tutorial/#install-hyprland "Hyprland Wiki") terminal emulator. Following [wiki](https://wiki.hyprland.org/Nix/ "Hyprland Wiki"), only 1 environment variable is defined. `XWayland` is enabled by [default](https://search.nixos.org/options?channel=unstable&show=programs.hyprland.xwayland.enable "NixOS.org").
1. Connect to internet. Use `# nixos-rebuild switch`.
1. Reboot. Use `$ Hyprland` to see that Hyprland works. No crashes.

Debugging kitty and xdg-desktop-portal:
1. In Hyprland, use `$ kitty` to see `[0.139] [glfw error 65544]: process_desktop_settings: failed with error: [org.freedesktop.DBus.Error.UnknownMethod] No such interface "org.freedesktop.portal.Settings" on object at path /org/freedesktop/portal/desktop`. A new terminal appears, but as soon as I use <kbd>ctrl</kbd>+<kbd>c</kbd> in the origional terminal, the new terminal disappears. 
1. Using `$ systemctl --user status dbus` shows no abnormalities, but using `$ systemctl --user status xdg-desktop-portal.service` shows (incomplete):
   ```
   systemd[1111]: Starting Portal service...
   .xdg-desktop-po[1240]: Failed to load RealtimeKit property: GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.RealtimeKit1 was not provided by any .service files
   .xdg-desktop-po[1240]: Failed to load RealtimeKit property: GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.RealtimeKit1 was not provided by any .service files
   .xdg-desktop-po[1240]: Failed to load RealtimeKit property: GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.RealtimeKit1 was not provided by any .service files
   .xdg-desktop-po[1187]: No skeleton to export
   systemd[1111]: Started Portal service.
   ```
1. Kitty's error can be fixed by adding xdg-desktop-portal-gtk to the system. This can seemingly be done 2 ways; either with `environment.systemPackages` or with `xdg.portal.extraPortals = [ pkgs.xdg-desktop-portal-gtk ];`. Both ways install xdg-desktop-portal-gtk, and I choose the second option.\
   Note: Using `$ systemctl --user status xdg-desktop-portal-hyprland.service` shows that the Hyprland version of xdg-desktop-portal is already running without any issues; I guess kitty either is not using this Hyprland version or does not work with it. Although, I do not mind installing the GTK version of xdg-desktop-portal, it is also recommended on the [Hyprland wiki](https://wiki.hyprland.org/Useful-Utilities/xdg-desktop-portal-hyprland/).
1. xdg-desktop-portal's RealtimeKit error can be fixed by adding `security.rtkit.enable = true;` to `configuration.nix`. `No skeleton to export` can also be fixed by adding xdg-desktop-portal-gtk.\
   After changing these two options, a new error appears when using `$ systemctl --user status xdg-desktop-portal.service` (incomplete):
   ```
   systemd[1143]: Starting Portal service...
   .xdg-desktop-po[1220]: Failed connect to PipeWire: Couldn't connect to PipeWire
   systemd[1143]: Started Portal service.
   ```
   This pipewire error can be fixed by adding `services.pipewire.enable = true;` to `configuration.nix`. After doing so, no xdg-desktop-portal errors occur.
1. All additions to `configuration.nix` as a result of the errors:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];
   
     boot.loader = {
       # ...
     };
   
     nix.settings.experimental-features = [ "nix-command" "flakes" ];
   
     networking = {
       # ...
     };
   
     time.timeZone = "America/New_York";
   
     services = {
       libinput.enable = true;
   +   pipewire.enable = true;
     };
   
   + security.rtkit.enable = true;

   + xdg.portal = {
   +   enable = true;
   +   extraPortals = [ pkgs.xdg-desktop-portal-gtk ];
   + };

     users = {
       # ...
     };
   
     environment = {
       # ...
     };

     programs = {
       # ...
     };
   
     system.stateVersion = "24.05";
   }
   ```
   Connect to internet. Use `# nixos-rebuild switch`.

Using [Home Manager](https://nix-community.github.io/home-manager/options.xhtml#opt-wayland.windowManager.hyprland.enable "Home Manager Manual") to configure [Hyprland](https://wiki.hyprland.org/Configuring/Configuring-Hyprland/ "Hyprland Wiki"):
1. Create and edit `/etc/nixos/hslaToRgba.nix`:
   ```nix
   { lib, builtins }:

   let
     mod = x: y: x - y * (builtins.floor (x / y));
     abs = x: if x < 0 then -x else x;

     hslaToRgba = hsla:
       let
         h = mod hsla.h 360 / 60.0;
         s = hsla.s;
         l = hsla.l;
         a = hsla.a;
   
         c = (1 - abs(2 * l - 1)) * s;
         x = c * (1 - abs (mod h 2 - 1));
         m = l - c / 2;
   
         rgb' =
           if h < 1 then { r = c; g = x; b = 0; }
           else if h < 2 then { r = x; g = c; b = 0; }
           else if h < 3 then { r = 0; g = c; b = x; }
           else if h < 4 then { r = 0; g = x; b = c; }
           else if h < 5 then { r = x; g = 0; b = c; }
           else { r = c; g = 0; b = x; };
   
         round = x: builtins.floor (x * 255 + 0.5);
         r = round (rgb'.r + m);
         g = round (rgb'.g + m);
         b = round (rgb'.b + m);
         alpha = round a;
   
         toHex = x: let 
           hex = lib.toHexString (lib.min 255 (lib.max 0 x));
         in if builtins.stringLength hex == 1 then "0${hex}" else hex;
       in
       "${toHex r}${toHex g}${toHex b}${toHex alpha}";
   in
   hslaToRgba
   ```
   Hyprland uses hexadecimal RGBA format to configure colors, which is not human readable. `hslaToRgba.nix` converts HSLA to hexadecimal RGBA. 
1. Edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   +let
   + hslaToRgba = import ./hslaToRgba.nix { inherit lib builtins; };
   + formatRgba = color: "rgba(${hslaToRgba color})";

   + borderGradientDegree = 45;
   + borderActive1 = { h = 0; s = 0.0; l = 1.0; a = 1; };
   + borderActive2 = { h = 0; s = 0.0; l = 1.0; a = 0.65; };
   + borderInactive = { h = 210; s = 0.16; l = 0.5; a = 0.5; };
   + shadowActive = { h = 185; s = 0.5; l = 0.6; a = 0.1; };
   + shadowInactive = { h = 0; s = 0.0; l = 0.2; a = 0.1; };

   +in
   {
     home = {
       # ...
     };

   + wayland.windowManager.hyprland = {
   +   enable = true;
   +   settings = {
   +     bind = [
   +       "ALT, TAB, cyclenext"
   +       "ALT, TAB, alterzorder, top"
   +       "SUPER, T, exec, kitty"
   +       "SUPER, W, killactive"
   +       "SUPER, Q, togglefloating"
   +       "SUPER, F, fullscreen, 2"
   +       "SUPER, K, exit"
   +     ];
   +     bindm = [
   +       "SHIFT, mouse:272, movewindow"
   +       "CTRL, mouse:272, resizewindow"
   +     ];
   +     bezier = [
   +       "linear, 0.5, 0.5, 0.5, 0.5"
   +       "snappyOut1, 0, 0.85, 0, 1"
   +       "snappyOut2, 0, 0.6, 0.15, 1"
   +       "expoOut, 0.16, 1, 0.3, 1"
   +     ];
   +     animation = [
   +       "windowsIn, 1, 5, snappyOut1, popin 20%"
   +       "windowsOut, 1, 8, snappyOut2, popin 80%"
   +       "windowsMove, 1, 5, snappyOut1"
   +       "fadeOut, 1, 4, expoOut"
   +       "borderangle, 1, 40, linear, loop"
   +     ];
   +     general = {
   +       border_size = 2;
   +       gaps_out = 15;
   +       "col.active_border" = "${formatRgba borderActive1} ${formatRgba borderActive2} ${toString borderGradientDegree}deg";
   +       "col.inactive_border" = formatRgba borderInactive;
   +       resize_on_border = true;
   +     };
   +     decoration = {
   +       rounding = 8;
   +       shadow_range = 6;
   +       shadow_render_power = 1;
   +       "col.shadow" = formatRgba shadowActive;
   +       "col.shadow_inactive" = formatRgba shadowInactive;
   +       blur = {
   +         size = 6;
   +         passes = 3;
   +       };
   +     };
   +     input = {
   +       repeat_delay = 500;
   +       sensitivity = "0.3";
   +       accel_profile = "flat";
   +       touchpad = {
   +         disable_while_typing = false;
   +         natural_scroll = true;
   +         tap-and-drag = false;
   +       };
   +     };
   +     misc = {
   +       disable_hyprland_logo = true;
   +       disable_splash_rendering = true;
   +       animate_manual_resizes = true;
   +       animate_mouse_windowdragging = true;
   +       middle_click_paste = false;
   +     };
   +   };
   + };

     programs.home-manager.enable = true;
   }
   ```
   Since I am using Hyprland from `hyprland.pkgs`, I do not need to specify `wayland.windowManager.hyprland.package` for Home Manager.\
   Options that have syntax similar to Nix need to be wrapped in `""`.\
   [Bind and flag(s)](https://wiki.hyprland.org/Configuring/Binds/#bind-flags "Hyprland Wiki") = [modifier key(s)](https://wiki.hyprland.org/Configuring/Variables/#variable-types "Hyprland Wiki"), other key(s), [action](https://wiki.hyprland.org/Configuring/Dispatchers/#list-of-dispatchers "Hyprland Wiki"), parameter(s).\
   Although trackpad (libinput) configuration can be done through `configuration.nix`, that [doesn't work](https://discourse.nixos.org/t/xorg-libinput-configuration-seems-to-be-ignored/15504) for me (`/etc/X11/xorg.conf` isn't generated), so I use Hyprland's options instead.\
   On the [Hyprland wiki](https://wiki.hyprland.org/Configuring/Variables/#touchpad:~:text=bool-,false,-Touchdevice), `touch-and-drag`'s default is marked as `false`, but in reality it's default is actually `true`, so I explicitly set it.
1. Connect to internet. Use `# nixos-rebuild switch`.\
   An error occurs since a configuration file for Hyprland was automatically generated when installing Hyprland. Home Manager will not overwrite this existing configuration file.
1. Use `$ rm ~/.config/hypr/hyprland.conf`, then `# nixos-rebuild switch` again.\
   Now, the configurations from `home.nix` appear.\
   Note: Home Manager creates a symlink at `~/.config/hypr/hyprland.conf`. I can remove this symlink, and when I use `# nixos-rebuild switch`, Home Manager will generate the symlink according to `home.nix` again. 

Using [Home Manager](https://nix-community.github.io/home-manager/options.xhtml#opt-programs.kitty.enable "Home Manager Manual") to configure [kitty](https://sw.kovidgoyal.net/kitty/conf/ "Kitty Documentation"):
1. Edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   let
     # ...
   
   in
   {
     home = {
       # ...
     };

     wayland.windowManager.hyprland = {
       # ...
     };

   + programs.kitty = {
   +   enable = true;
   +   settings = {
   +     font_size = "9.5";
   +     cursor_shape = "beam";
   +     cursor_shape_unfocused = "beam";
   +     cursor_stop_blinking_after = 0;
   +     scrollback_fill_enlarged_window = true;
   +     mouse_hide_wait = -1;
   +     show_hyperlink_targets = true;
   +     clear_all_mouse_actions = true;
   +     enable_audio_bell = false;
   +     confirm_os_window_close = 0;
   +     background_opacity = "0.3";
   +     selection_background = "#ffffff";
   +     clear_all_shortcuts = true;
   +   };  
   +   extraConfig = ''
   +     mouse_map left press ungrabbed mouse_selection normal
   +     mouse_map left doublepress ungrabbed mouse_selection word
   +     mouse_map left triplepress ungrabbed mouse_selection line
   +     map ctrl+c copy_or_interrupt
   +     map ctrl+x copy_and_clear_or_interrupt
   +     map ctrl+v paste_from_clipboard
   +     map ctrl+equal change_font_size all +1.0
   +     map ctrl+minus change_font_size all -1.0
   +   '';
   + };

     programs.home-manager.enable = true;
   }
   ```
   The `programs.kitty.shellIntegration.enableZshIntegration` Home Manager option is not set because it does not actually achieve [shell integration](https://sw.kovidgoyal.net/kitty/shell-integration/#shell-integration "Kitty Documentation"). Although kitty uses `"yes"` and `"no"`, Home Manager converts `true` and `false` to the strings. `''` defines multi-line strings in nix.
1. Connect to internet. Use `# nixos-rebuild switch`.

### Using Firefox
In nixpkgs, `*-bin` means precompiled binary; `*-unwrapped` means not wrapped by NixOS. Installing `firefox-bin` instead of the normal non-precompiled version does not seem to make a difference during configuration with Home Manager or `configuration.nix`.
1. To install `firefox-bin` for all users, edit `configuration.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];
   
     boot.loader = {
       # ...
     };
   
     nix.settings.experimental-features = [ "nix-command" "flakes" ];
   
     networking = {
       # ...
     };
   
     time.timeZone = "America/New_York";
   
     services = {
       # ...
     };
   
     security.rtkit.enable = true;

     xdg.portal = {
       # ...
     };

     users = {
       # ...
     };
   
     environment = {
       # ...
     };
   
     programs = {
       git.enable = true;

       zsh = {
         # ...
       };

       hyprland.enable = true;

   +   firefox = {
   +     enable = true;
   +     package = pkgs.firefox-bin;
   +     policies = {
   +       DisablePocket = true;
   +       ExtensionSettings = ;
   +       FirefoxHome = {
   +         Search = false;
   +         TopSites = false;
   +         SponsoredTopSites = false;
   +         Highlights = false;
   +         Pocket = false;
   +         SponsoredPocket = false;
   +       };
   +       Homepage = {
   +         URL = "https://redacted.myschoolapp.com/app/student";
   +         StartPage = "previous-session";
   +       };
   +       OverrideFirstRidePage = "";
   +       Permissions = ;
   +       Preferences = {
   +         "browser.tabs.tabmanager.enabled" = {
   +           Value = false;
   +           Status = "user";
   +         };
   +         "browser.tabs.inTitlebar" = {
   +           Value = 0;
   +           Status = "user";
   +         };
   +         "browser.uidensity" = {
   +           Value = 1;
   +           Status = "user";
   +         };
   +         "browser.urlbar.shortcuts.tabs" = {
   +           Value = false;
   +           Status = "user";
   +         };
   +         "browser.urlbar.suggest.engines" = {
   +           Value = false;
   +           Status = "user";
   +         };
   +         "browser.urlbar.suggest.topsites" = {
   +           Value = false;
   +           Status = "user";
   +         };
   +         "browser.urlbar.suggest.calculator" = {
   +           Value = true;
   +           Status = "user";
   +         };
   +         "browser.urlbar.unitConversion.enabled" = {
   +           Value = true;
   +           Status = "user";
   +         };
   +         "browser.vpn_promo.enabled" = {
   +           Value = false;
   +           Status = "user";
   +         };
   +       };
   +     };
   +   };
     };
   
     system.stateVersion = "24.05";
   }
   ```
   [Policies](https://mozilla.github.io/policy-templates/ "Mozilla's GitHub") (view in Firefox internal page with URL `about:policies`; stored in file(s) in `/nix/store/`) are usually declared to allow administrators to set and lock browser settings. `programs.firefox.policies` is declared in `configuration.nix` because the Home Manager option `programs.firefox.policies` does not work. Other profile specific Home Manager options in `programs.firefox.profiles` work.\
   Note: The Firefox policy `NoDefaultBookmarks` seems good, but actually breaks Home Manager's `programs.firefox.profiles.<name>.bookmarks` option. When any option under `programs.firefox.profiles` (like `programs.firefox.profiles.<name>.bookmarks`) fails, all other options under `programs.firefox.profiles` fail; no error messages are displayed, but the configurations have no effect. When `programs.firefox.profiles.<name>.bookmarks` works, it silently overrides the default Firefox bookmarks.\
   `programs.firefox.preferences` declare configuration options [mostly](https://searchfox.org/mozilla-central/source/toolkit/modules/Troubleshoot.sys.mjs#113 "Firefox Source (Searchfox.org)") viewable in Firefox internal page `about:config`; in testing, this option seems to be equivalent to `programs.firefox.policies = { Preferences = {} }`, since the [`Preferences`](https://mozilla.github.io/policy-templates/#preferences "Mozilla's GitHub") policy can be seen in `about:policies`. Home Manager's option `programs.firefox.profiles.<name>.settings` also modify options viewable in `about:config`, but the modifications are user specific; the modifications are stored in `~/.mozilla/firefox/<name>/user.js`, which defines overrides to `~/.mozilla/firefox/<name>/prefs.js` (Firefox modifies `prefs.js` when options are changed directly through `about:config`). So, to modify `about:config` for all users, using a policy is the only option, and to modify `about:config` for a specific user, using Home Manager's option `programs.firefox.profiles.<name>.settings` is the only option (there is no option for modifying `prefs.js` directly, but modifying `user.js` achieves the same result). Also, Home Manager's option `programs.firefox.profiles.<name>.extraConfig` modifies `user.js` as well, as seen in Home Manager's [`mkFirefoxModule.nix`](https://github.com/nix-community/home-manager/blob/afc892db74d65042031a093adb6010c4c3378422/modules/programs/firefox/mkFirefoxModule.nix#L847 "GitHub").\
   Note: Nearly all Firefox configuration options hidden or shown in `about:config` can be found in [`firefox.js`](https://searchfox.org/mozilla-release/source/browser/app/profile/firefox.js "Firefox Source (Searchfox.org)"), [`all.js`](https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js "Firefox Source (Searchfox.org)"), [`StaticPrefList.yaml`](https://searchfox.org/mozilla-release/source/modules/libpref/init/StaticPrefList.yaml "Firefox Source (Searchfox.org)"), and [MozillaZine](https://kb.mozillazine.org/About:config_entries). 
1. Connect to internet. Use `# nixos-rebuild switch`.\
   Use `$ firefox` to see that Firefox works.\
   In the terminal, minor error messages appear:
   ```
   [Parent 4325, Main Thread] WARNING: ../gdk/wayland/gdkcursor-wayland.c:243 cursor image size (9x16) not an integermultiple of scale (2): 'glib warning', file /builds/worker/checkouts/gecko/toolkit/xre/nsSigHandlers.cpp:187
   
   (firefox:4325): Gdk-WARNING **: 05:23:33.059: ../gdk/wayland/gdkcursor-wayland.c:243 cursor image size (9x16) not an integermultiple of scale (2)
   Gdk-Message: 05:23:36.908: Unable to load pointer from the cursor theme
   Gdk-Message: 05:27:02.544: Unable to load col-resize from the cursor theme
   ```
   Although Hyprland has Hyprcursor which is superior to XCursor, some applications like Firefox [don't support](https://wiki.hyprland.org/Hypr-Ecosystem/hyprcursor/#important-notes "Hyprland Wiki") Hyprcursor and will fall back to XCursor. I don't have any Hyprcursor themes installed, so Hyprland is also falling back to XCursor. I don't have any XCursor themes installed. To customize the cursor in XCursor, edit `configuration.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];
   
     boot.loader = {
       # ...
     };
   
     nix.settings.experimental-features = [ "nix-command" "flakes" ];
   
     networking = {
       # ...
     };
   
     time.timeZone = "America/New_York";
   
     services = {
       # ...
     };

     security.rtkit.enable = true;

     xdg.portal = {
       # ...
     };

     users = {
       # ...
     };
   
     environment = {
       systemPackages = with pkgs; [
         kitty
   +     capitaine-cursors
       ];
       sessionVariables.NIXOS_OZONE_WL = "1";
     };
   
     programs = {
       # ...
     };
   
     system.stateVersion = "24.05";
   }
   ```
   And edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   let
     # ...
   
   in
   {
     home = {
       username = "tim";
       homeDirectory = "/home/tim";
       stateVersion = "24.05";
   +   pointerCursor = {
   +     package = pkgs.capitaine-cursors;
   +     name = "capitaine-cursors";
   +     gtk.enable = true;
   +     x11.enable = true;
   +     x11.defaultCursor = "default";
   +   };
     };

     wayland.windowManager.hyprland = {
       # ...
     };

     programs.kitty = {
       # ...
     };

     programs.home-manager.enable = true;
   }
   ```
   `home.pointerCursor.package` must be declared because it doesn't have a default.\
   `home.pointerCursor.x11` is enabled for X programs that run through XWayland.\
   Firefox uses GDK (backbone of GTK, the GUI toolkit), so having `home.pointerCursor.gtk.enable = true;` generates the cursor configuration for GTK. The `gtk.cursorTheme` option also exists in Home Manager, but that is not needed. [Home Manager documentation](https://nix-community.github.io/home-manager/options.xhtml#opt-home.pointerCursor) suggests that `gtk.enable` must be set to `true` for configurations generated by `home.pointerCursor.gtk.enable` to be applied, but that is not needed.\
   `home.pointerCursor.size` seems to do nothing and Hyprland's environment variable `XCURSOR_SIZE` does not change the size for Firefox. Anyway, the default cursor size (likely 24) looks fine. Hyprland's other environment variable for cursors `XCURSOR_THEME` does not seem to do anything extra when `home.pointerCursor.name` is set. So, I do not set any environment variables for Hyprland.\
   Although `pkgs.capitaine-cursors` includes light and dark versions, the dark version seems to be the default, so I don't configure that manually.\
   After connecting to internet and using `# nixos-rebuild switch`, running Firefox shows no error messages.
1. To use Home Manager to configure Firefox, edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   let
     # ...
   
   in
   {
     home = {
       # ...
     };

     wayland.windowManager.hyprland = {
       # ...
     };

     programs.kitty = {
       # ...
     };

   + programs.firefox = {
   +   enable = true;
   +   package = pkgs.firefox-bin;
   +   profiles.tim1 = {
   +     name = "School";
   +     id = 0;
   +     bookmarks = [
   +       {
   +         toolbar = true;
   +         bookmarks = [
   +           {
   +             name = "Gmail";
   +             url = "https://mail.google.com";
   +             keyword = "m";
   +           }
   +           {
   +             name = "Drive";
   +             url = "https://drive.google.com/drive/u/0/my-drive";
   +             keyword = "d";
   +           }
   +           {
   +             name = "Claude";
   +             url = "https://claude.ai/chats";
   +             keyword = "c";
   +           }
   +         ];
   +       }
   +     ];
   +     extensions = ;
   +     settings = {
   +       "middlemouse.paste" = false;
   +       "findbar.highlightAll" = true;
   +     };
   +     extraConfig = ''
   +     '';
   +     search.engines = {
   +       "Bing CN" = {
   +         urls = [{ template = "https://cn.bing.com/search?q={searchTerms}&ensearch=1"; }];
   +         definedAliases = [ "@b" ];
   +         iconURL = "https://img.icons8.com/fluency/48/bing--v4.png";
   +       };
   +       "Bing".metaData.hidden = true;
   +       "DuckDuckGo".metaData.hidden = true;
   +       "Wikipedia (en)".metaData.hidden = true;
   +     };
   +     userChrome = ''
   +     '';
   +     userContent = ''
   +     '';
   +   };
   +   profiles.test = {
   +     id = 1;
   +   };
   + };

     programs.home-manager.enable = true;
   }
   ```
   The default for `programs.firefox.package` is `pkgs.firefox`, not `pkgs.firefox-bin`, so if the option is not set, Home Manager will try to install `pkgs.firefox` instead of using `pkgs.firefox-bin` that's already installed through configuration in `configuration.nix`.\
   Note: When I first used `# nixos-rebuild switch`, a download of a Firefox package began, even though I specified `programs.firefox.package = pkgs.firefox-bin`, matching the package in `configuration.nix`. I updated `/etc/nixos/flake.lock`, used `# nixos-rebuild switch` *without* any Firefox configurations in `home.nix`, and then used `# nixos-rebuild switch` *with* Firefox configurations including `programs.firefox.package = pkgs.firefox-bin` in `home.nix`; during this rebuild no Firefox package was downloaded. Using `nix-store -q --references /run/current-system/sw | grep firefox` shows only one Firefox. A possible explanation could be that Home Manager queries a different *version* of the unstable branch of nixpkgs than the OS; Home Manager follows the same branch as the OS, as defined in `flake.nix` `home-manager.inputs.nixpkgs.follows = "nixpkgs";`, but a different version of the branch. So, during rebuild, Home Manager sees that in its version of the nixos-unstable branch of nixpkgs there is `pkgs.firefox-bin` of a different version than the `pkgs.firefox-bin` already installed in the system, so Home Manager tries to install the newer `pkgs.firefox-bin` from the version of the nixos-unstable branch of nixpkgs that it follows. So, when I update the version of the nixos-unstable branch of nixpkgs that the OS follows by updating `/etc/nixos/flake.lock` to possibly match the version that Home Manager is following, Home Manager does not install another Firefox anymore. One reason to suspect this is that before `/etc/nixos/flake.lock` was updated, Firefox version 127.x.x was installed, and after updating, it changed to version 128.0.3.\
   Firefox generates profiles on first launch, not instillation. This means that if I delete the profile directories and use `# nixos-rebuild switch` *without* modifying `home.nix`, reopening Firefox will generate the default profile instead of profiles defined in `programs.firefox.profiles`.\
   `programs.firefox.profiles.<name>.id` must be declared when multiple profiles are declared.\
   The syntax inside `programs.firefox.profiles.<name>.bookmarks` does not allow `;`'s after `{}`'s. The [`toolbar`](https://github.com/nix-community/home-manager/blob/afc892db74d65042031a093adb6010c4c3378422/modules/programs/firefox/mkFirefoxModule.nix#L475 "GitHub") option defines the sub-bookmarks within the bookmark (functioning as directory) as toolbar bookmarks. This is the pseudo-structure: `profileBookmarks = { menuBookmark1, menuBookmark2, toolbarBookmarks = { toolbarBookmark1, toolbarBookmark2, ... }, menuBookmark3, ... }`. The `keyword` option redirects typing the string in the address bar to the bookmark.\
   Configurations inside `programs.firefox.profiles.<name>.settings` are all configurations not available through the [Preferences](https://mozilla.github.io/policy-templates/#preferences "Mozilla's GitHub") policy in `configuration.nix`.\
   `programs.firefox.profiles.<name>.search.force` does not function as described in the [documentation](https://nix-community.github.io/home-manager/options.xhtml#opt-programs.firefox.profiles._name_.search.force "Home Manager Manual"); the default search engines (Google, Bing, DuckDuckGo, Wikipedia (en)) still appear with the option set to `true`. On seemingly every launch, Firefox regenerates the file `~/.mozilla/firefox/<name>/search.json.mozlz4`, replacing Home Manager's symlink, adding the default search engines back into the file; the issue is [not resolved](https://github.com/nix-community/home-manager/issues/3698#issuecomment-1863664311 "GitHub"). The [`SearchEngines`](https://mozilla.github.io/policy-templates/#searchengines-this-policy-is-only-available-on-the-esr "Mozilla's GitHub") policy exists for Firefox ESR, and for security [reasons](https://github.com/mozilla/policy-templates/issues/706#issuecomment-1976702696 "GitHub") it will not be supported for rapid release. Default search engines are hidden with [metadata attributes](https://searchfox.org/mozilla-central/source/toolkit/components/search/nsISearchService.idl#128,144,470,479 "Firefox Source (Searchfox.org)") in `home.nix`; default engines cannot be removed completely, although [uninstalling](https://github.com/mozilla/policy-templates/issues/484 "GitHub") them through extension related policies could work. `programs.firefox.profiles.<name>.search.privateDefault` does not work, but the default is Google.\
   Remove the directories `~/.mozilla` and `~/.cache/mozilla`. Connect to internet. Use `# nixos-rebuild switch`.

### Controlling Screen Backlight
Packages like `light` and `brightnessctl` work on Wayland and make changing screen brightness easy, but there is a simpler way to change screen brightness. The file `/sys/class/backlight/intel_backlight/brightness` contains an integer that defines the screen brightness. Use `$ cat /sys/class/backlight/intel_backlight/max_brightness` to see the max brightness is 24000 (a number <188 makes the backlight flicker or turn off). When the file `brightness` is modified, the screen brightness changes accordingly. However, the file `brightness` has permissions `-rw-r--r--` (file type, permissions(owner, group, others)), so only the root user can modify it. Use `$ sudo tee /sys/class/backlight/intel_backlight/brightness <<< MY_NUMBER` to modify the file manually.\
Notes: Using `$ sudo echo MY_NUMBER > /sys/class/backlight/intel_backlight/max_brightness` does not work because `sudo` elevates the command that follows it (`echo` in this case), not the redirector operator `>` which is handled by the shell (zsh for me). `sudo` here does not affect the shell's operations; `>` is supposed to write the output of `echo MY_NUMBER` to the file `brightness` but it's operated by the shell which doesn't have permission. Using `# echo MY_NUMBER > /sys/class/backlight/intel_backlight/max_brightness` works because while using commands as root, all operations, including the shell's operations, are performed with root privileges. Also, to use the command without root, use `$ sudo sh -c 'echo MY_NUMBER > /sys/class/backlight/intel_backlight/max_brightness'`. `<<<` (*here string*) is also a shell operation, but in `$ sudo tee /sys/class/backlight/intel_backlight/brightness <<< MY_NUMBER` `tee` actually does the writing, and `tee` has elevated privileges. `<<<` only passes the string to `tee` for `tee` to modify the file `brightness`.
1. To allow modification of the file `brightness` without `sudo` for all users, edit `configuration.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];

     boot.loader = {
       # ...
     };

     nix.settings.experimental-features = [ "nix-command" "flakes" ];

     networking = {
       # ...
     };

     time.timeZone = "America/New_York";

     services = {
       libinput.enable = true;
       pipewire.enable = true;
   +   udev.extraRules = ''
   +     ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", MODE="0666", RUN+="${pkgs.coreutils}/bin/chmod a+w /sys/class/backlight/%k/brightness"
   +   '';
     };
   
     security.rtkit.enable = true;

     xdg.portal = {
       # ...
     };

     users = {
       # ...
     };
   
     environment = {
       # ...
     };
   
     programs = {
       # ...
     };

     system.stateVersion = "24.05";
   }
   ```
   `udev` is enabled by default.\
   After connecting to internet and using `# nixos-rebuild switch`, and then rebooting, `/sys/class/backlight/intel_backlight/brightness` has permissions `-rw-rw-rw-`.
1. To bind dynamic commands to keybinds to change screen brightness in Hyprland, edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   let
     # ...
   
   in
   {
     home = {
       # ...
     };

     wayland.windowManager.hyprland = {
       enable = true;
       settings = {
         bind = [
           # ...
         ];
   +     binde = [
   +       "SUPER, MINUS, exec, val=$(< /sys/class/backlight/intel_backlight/brightness); tee /sys/class/backlight/intel_backlight/brightness <<< $((val <= 4188 ? 188 : val - 4000))"
   +       "SUPER, EQUAL, exec, val=$(< /sys/class/backlight/intel_backlight/brightness); tee /sys/class/backlight/intel_backlight/brightness <<< $((val >= 20000 ? 24000 : val + 4000))"
   +     ];
         bindm = [
           # ...
         ];
         # ...
       };
     };

     programs.kitty = {
       # ...
     };

     programs.firefox = {
       # ...
     };

     programs.home-manager.enable = true;
   }
   ```
   Connect to internet. Use `# nixos-rebuild switch`.

### Using a Display (Login) Manager
Since I only have one user and one window manager or desktop environment, I do not need a graphical display manager, or any display manager at all.
1. To automate typing in the username, edit `configuration.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];

     boot.loader = {
       # ...
     };

     nix.settings.experimental-features = [ "nix-command" "flakes" ];

     networking = {
       # ...
     };

     time.timeZone = "America/New_York";
   
     services = {
       libinput.enable = true;
       pipewire.enable = true;
       udev.extraRules = ''
         # ...
       '';
   +   getty.extraArgs = [ "--skip-login" "--login-options" "tim" ];
     };
   
     security.rtkit.enable = true;

     xdg.portal = {
       # ...
     };

     users = {
       # ...
     };

     environment = {
       # ...
     };

     programs = {
       # ...
     };
   
     system.stateVersion = "24.05";
   }
   ```
   [`getty`](https://en.wikipedia.org/wiki/Getty_(Unix) "Wikipedia") (get-tty) manages TTYs.\
   `services.getty.autologinUser` is not used because it skips the password too.
1. To start Hyprland automatically after login, edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   let
     # ...
   
   in
   {
     home = {
       # ...
     };

     wayland.windowManager.hyprland = {
       # ...
     };

     programs.kitty = {
       # ...
     };

     programs.firefox = {
       # ...
     };

   + programs.zsh = {
   +   enable = true;
   +   profileExtra = ''
   +     if [ -z "''${DISPLAY}" ] && [ "''${XDG_VTNR}" -eq 1 ]; then
   +       exec Hyprland
   +     fi
   +   '';
   + };

     programs.home-manager.enable = true;
   }
   ```
   Note: Options similar to `programs.zsh.profileExtra` exist for `configuration.nix`, but they are system wide.\
   Zsh executes a few files in a [specific order](https://github.com/sambacha/dotfiles2/blob/master/.github/shell-startup.png "Zsh Config Files Flowchart") on startup. the `.zprofile` file is executed on all login startups.\
   `-z` checks for zero length; if Hyprland is already running, `${DISPLAY}` will have length. In nix, `$`s inside multi-line strings can be escaped with `''`. `${XDG_VTNR}` indicates TTY#; `-eq` means "equal".\
   Remove `/home/tim/.zshrc`, then connect to internet and use `# nixos-rebuild switch`.

### Using swww
The swww wallpaper manager does not have a configuration file; all configurations are done through commands.
1. To install swww, edit `configuration.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   {
     imports =
       [
         ./hardware-configuration.nix
       ];
   
     boot.loader = {
       # ...
     };
   
     nix.settings.experimental-features = [ "nix-command" "flakes" ];
   
     networking = {
       # ...
     };
   
     time.timeZone = "America/New_York";
   
     services = {
       # ...
     };

     security.rtkit.enable = true;

     xdg.portal = {
       # ...
     };

     users = {
       # ...
     };
   
     environment = {
       systemPackages = with pkgs; [
         kitty
         capitaine-cursors
   +     swww
       ];
       sessionVariables.NIXOS_OZONE_WL = "1";
     };
   
     programs = {
       # ...
     };
   
     system.stateVersion = "24.05";
   }
   ```
1. Use `$ mkdir /home/tim/Wallpapers` to create a directory for the wallpapers.
1. To autostart swww and automatically randomize wallpapers, edit `home.nix`:
   ```diff
   { config, lib, pkgs, ... }:
   
   let
     # ...
   
   in
   {
     home = {
       username = "tim";
       homeDirectory = "/home/tim";
       stateVersion = "24.05";
       pointerCursor = {
         # ...
       };
   +   file = {
   +     ".swwwRandomizer" = {
   +       enable = true;
   +       executable = true;
   +       text = ''
   +         #!/usr/bin/env zsh
   +         swww img ''$1/*([1])
   +         used=()
   +         while :; do
   +           all=(''$1/*)
   +           [[ ''$#used -eq ''$#all ]] && used=(''$selected)
   +           unused=(''${all:|used})
   +           selected=''${unused[''$RANDOM % ''$#unused + 1]}
   +           random_pos=(''$(seq 0.1 .1 0.9 | shuf))
   +           swww img ''$selected \
   +             --resize crop \
   +             -t grow \
   +             --transition-pos ''$random_pos[1],''$random_pos[2] \
   +             --transition-duration 5 \
   +             --transition-fps 60 \
   +             -f Nearest
   +           used+=(''$selected)
   +           sleep ''$2
   +         done
   +       '';
   +     };
   +   };
     };

     wayland.windowManager.hyprland = {
       enable = true;
       settings = {
         # ...
         misc = {
           # ...
         };
   +     exec-once [
   +       "swww-daemon"
   +       "~/.swwwRandomizer /home/tim/Wallpapers 3600"
   +     ];
       };
     };

     programs.kitty = {
       # ...
     };

     programs.firefox = {
       # ...
     };

     programs.zsh = {
       # ...
     };

     programs.home-manager.enable = true;
   }
   ```
   Home Manager's [`home.file.<name>.target`](https://nix-community.github.io/home-manager/options.xhtml#opt-home.file._name_.target "Home Manager Manual") option defines the path and name of the generated symlink or file relative to `~`. This option defaults to `~/<name>` when undefined.\
   Although the zsh script can be run as a one-line command with `$ zsh -c "command"`, using Hyprland's `exec-once` to execute the command on Hyprland startup does not seem to work. Also, the NixOS option [`writeShellApplication`](https://nixos.org/manual/nixpkgs/unstable/#trivial-builder-writeShellApplication "NixOS Manual") might be worth exploring for system wide scripts.\
   Pseudocode for the script:
   1. [Shebang](https://en.wikipedia.org/wiki/Shebang_(Unix) "Wikipedia") for NixOS.
   1. Execute `swww img` with the path to the file inside `$1` with index 1.\
      `$` indicates a variable. The variable `1` is the first argument passed to the script when it is run, like so: `$ ~/.swwwRandomizer first_argument`. Using `$ ~/.swwwRandomizer /home/tim/Wallpapers` simplifies to `swww img /home/tim/Wallpapers/*([1])`. The wildcard `*` lists all files in `Wallpapers`. Parentheses `()` here is required to indicate a *[glob](https://en.wikipedia.org/wiki/Glob_(programming) "Wikipedia") pattern* to match for the file with index, denoted with brackets `[]`, of number `1`. In zsh, array indexing starts at one, not zero.\
      Note: Using `$ swww-daemon` without any cache (to clear cache, use `$ swww clear-cache`) and then using `$ swww img /path/to/any/image` displays a black wallpaper. Using `$ swww query` that swww has attempted to display an image. Using `$ swww img /path/to/any/image` again fixes the black wallpaper. So, the script runs `$ swww img $1*([1])` once in the start to arbitrarily attempt to display the first image in `/home/tim/Wallpapers` to fix this.\
   1. Define `used` as an empty array.\
      Putting spaces before and after the equal sign `=` would result in a syntax error.
   1. While true, loop:\
      `:` stands for `true`. Semicolons `;` are mandatory for compacting the script into a single line; they are optional with newlines.
      1. Define `all` as an array of files inside `$1/*`.
      1. Length of `used` equals length of `all` and redefine `used` as an array with only `selected`.\
         Double brackets `[[ ]]` are used for testing conditions. `#` tests for the length of the array variable. `&&`, the logical AND, only runs the second command if the first returns `true`. `selected` is defined later in the script; putting it here will never cause an error unless `all` is defined as an empty array. Putting `selected` ensures that images never get picked twice in a row after all images have been used.\
         Note: `$#var` works in zsh, but not bash. In bash, curly braces `{}` are required: `${#var}`.
      1. Define `unused` as an array of `all` without `used`.\
         `{}` are required for zsh to group commands. `:|` removes anything inside the second array from the first array. `:|` needs to be inside the *parameter expansion* `${}`. Otherwise, `:|` in `unused=($all:|$used)` would be interpreted as a pipe operator followed by a colon.
      1. Define `selected` as the path of the ((`$RANDOM` modulo length of `unused`) + 1)th file of `unused`.\
         `$RANDOM` is a pre-defined shell variable that returns a random integer between 0 and 32767. The modulo operator `%` returns the remainder from dividing `$RANDOM` by the length of `unused`. Since zsh is one indexed, one is added to the remainder to accurately calculate the index.
      1. Define `random_pos` as the array of the sequence of 0.1 to 0.9 with step 0.1 shuffled.\
         The set of inner parentheses `$()` capture *command substitution*. The pipe operator `|` feeds the output of the first command as input to the second command.
      1. Execute `swww img` with the image with path `selected`.\
         Back slashes `\` are used to separate one line commands to multiple lines. Use `swww img --help` to see all image display and transition options. `--resize fit` shrinks the image until the entire image is displayed; `--resize crop` enlarges the image until the screen is filled. `-t grow` transition animation type is a growing circle. `-t any` randomizes the position of the circle, but it also randomizes between `grow` and `outer` (shrinking circle) animations, so it is not used. `--transition-pos` values separated by commas are float percentage values; arbitrarily the first and second floats of the shuffled `random_pos` array are used. `-f Nearest` is the fastest filter; best for pixel art.
      1. Append `selected` to the `used` array.
      1. Pause for variable `2` seconds.
   1. End of loop.

   Connect to internet. Use `# nixos-rebuild switch`.

### WIP
`# nix-collect-garbage -d` deletes generations and store objects.

hyprland: [window rules](https://wiki.hyprland.org/Configuring/Window-Rules/), [master layout](https://wiki.hyprland.org/Configuring/Master-Layout/), [env vars](https://wiki.hyprland.org/Configuring/Environment-variables/), [toggle blur/ani](https://wiki.hyprland.org/Configuring/Uncommon-tips--tricks/#toggle-animationsbluretc-hotkey).\
Finish hyprland animation customization (layers, etc...)\
wireplumber from hyprland docs / pipewire.pulse from configuration.nix

Home manage git

Kitty zsh shell integration (done?)\
Kitty color schemes? \
Zsh frameworks: oh my zsh, prezto, zinit, antigen, ...?\
Zsh plugins (plugin managers as well?)\
Packages for terminal: Neofetch alternative, fonts, improved ls find grep cat man etc..., \
Zsh Prompt Customization (what is that)? powerlevel10k, starship, ...?\
git integration? \
Terminal Multiplexers (what is that?)\
terminal file manager (any file manager)? \
better nano? \
system monitoring?

Bluetooth: \
Audio Control: \
Microphone Control: \
Keyboard Language Control: English, Chinese, Spanish. \
Camera Control: \
Power Manager: Find battery percentage: `$ cat /sys/class/power_supply/BAT0/capacity`\
Clipboard Manager: \
Screenshot Utility: \
Text / Code Editor: \
Calculator: \
Media Player: \
Image Viewer: \
Wechat\
Stremio\
Astrill VPN

Screen Locker: \
Taskbar (System Tray): https://sw.kovidgoyal.net/kitty/kittens/panel/\
Notification Daemon: \
Application Launcher: \
Authentication Agent: Starting method: manual (exec-once) Authentication agents are the things that pop up a window asking you for a password whenever an app wants to elevate its privileges.\
Wallpaper: https://www.reddit.com/r/commandline/comments/13y5j4m/asciimatrix/\
Pywal alternative

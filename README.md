# COLSOFT

## TODO
[x] - double click/right click empty space to create block
[x] - drag image onto browser to upload
[x] - handle resizing images / text (wordwrap?)
  [] - ctrl should snap to original img ratio, not square always
  [] - text should have "flexible" width and height initially (dashed boxes which can be toggled by dbl click?)
[] - handle clipboard paste (image or text)...
[] - local save/load :: export/import
[] - handle deleting blocks
[] - hovering is annoying with block precedence
  [] - ideally whichever block was last hovered over will have "precedence" (repositioned last in allBlocks? z-index?)
  [] - large textblocks/images that are partially covering blocks below (but that you can see below?) make the underlying inaccessible
[] - undo/redo (drag/resize/upload/delete/edit states)

[0;37;5;47;107m             [0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;37;5;47;107m    [0m
[0;37;5;47;107m  .  . .  .[0;1;37;97;47m%[0;1;30;90;47m:[0;1;37;97;47m%%S%%%S%%%S%%%S%%%S%%%S%%%S%[0;1;30;90;47m:[0;37;5;40;100m8[0;1;30;90;47m8[0;34;40m [0;37;5;47;107m . [0m
[0;37;5;47;107m   .     [0;1;37;97;47m%%[0;37;5;47;107m@@@@@@@@@@@@@@@@@@@@@@@@@@@@@[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;34;40m [0;37;5;47;107m.  [0m
[0;37;5;47;107m     .  .[0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%%%%%%S%%%%%%%S%%%%%%%S%%%%%S[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;34;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m .      .[0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%[0;34;40m [0;1;30;90;46m.[0;34;40mS[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;1;30;90;47m8[0;37;5;47;107m [0;1;37;97;47m%%[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;32;40m [0;37;5;47;107m . [0m
[0;37;5;47;107m   .  .  [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%S[0;31;40m [0;1;30;90;46m [0;36;5;46;106m.[0;1;30;90;46m   [0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;32;46m8[0;34;40m8[0;1;30;90;46m   [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47mS%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;32;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m  .     .[0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%[0;31;40m [0;1;30;90;46m [0;1;36;96;46m8[0;1;30;90;46m   [0;37;5;40;100m8[0;37;5;47;107m@@@@@@@@@@X@[0;32;40m;[0;1;30;90;46m   [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;32;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m    . .  [0;1;30;90;47m8[0;37;5;47;107m [0;1;37;97;47m%%[0;31;40m [0;1;30;90;46m  [0;30;44m [0;34;5;44;104m            [0;32;40m [0;37;5;47;107m .[0;34;40m [0;1;30;90;46m   [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%%[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;32;40m [0;37;5;47;107m . [0m
[0;37;5;47;107m  .      [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%%[0;31;40m [0;1;30;90;46m. [0;37;5;40;100m8[0;37;5;47;107m@@@@@@@@@@@@[0;32;40m [0;37;5;47;107m  [0;34;40m [0;1;30;90;46m   [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47mS%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;32;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m     .   [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%%[0;31;40m [0;1;30;90;46m  [0;1;30;90;47m8[0;37;5;47;107m.           [0;32;40m [0;37;5;47;107m  [0;32;40m [0;1;30;90;46m   [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;32;40m.[0;37;5;47;107m  .[0m
[0;37;5;47;107m  .    . [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%[0;31;40m [0;1;30;90;46m  [0;37;5;40;100m8[0;37;5;47;107m  . . . . . [0;32;40m    [0;1;30;90;46m   [0;1;30;90;47m8[0;37;5;47;107m [0;1;37;97;47m%%[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;34;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m    .    [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%%[0;31;40m [0;1;30;90;46m  [0;1;30;90;47m8[0;37;5;47;107m.           [0;31;40m [0;1;30;90;46m      [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;34;40m [0;37;5;47;107m . [0m
[0;37;5;47;107m  .   . .[0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%[0;31;40m [0;1;30;90;46m  [0;32;40m8[0;34;46m8[0;32;40m8[0;34;46m8[0;32;40m8[0;34;46m8[0;32;40m8[0;34;46m8[0;32;40m8[0;34;46m8[0;32;40m8[0;34;46m8[0;32;40m8[0;34;46m8[0;1;30;90;46m      [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;34;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m    .    [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%S[0;31;40m [0;1;30;90;46m                      [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;32;40m [0;37;5;47;107m   [0m
[0;37;5;47;107m  .    . [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%%[0;31;40m [0;1;30;90;47m888[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m88[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m88[0;37;5;47;107m.[0;1;37;97;47m%S[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;32;40m [0;37;5;47;107m . [0m
[0;37;5;47;107m     .   [0;1;30;90;47m8[0;37;5;47;107m [0;1;37;97;47m%%[0;37;5;47;107m@88@@@@@@@@@@@@@@@@@@@8@@[0;1;37;97;47m%%[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;36;5;40;100mt[0;30;5;40;100m@[0;33;5;40;100m%[0;35;5;40;100m.[0;1;30;90;47m8[0m
[0;37;5;47;107m  .     .[0;37;5;40;100m8[0;1;37;97;47mS[0;1;30;90;47m;:;:;;:;:;:;;:;;;;:;;:;;:;:;:8[0;30;5;40;100mS[0;31;5;40;100mS[0;37;5;40;100m@[0;1;30;90;47m;%8[0;34;40m [0m
[0;37;5;47;107m    . .   [0;34;40m      .        [0;31;40m         [0;32;40m       [0;37;5;40;100m88[0;1;37;97;47mS[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;34;40m.[0m
[0;37;5;47;107m  .    [0;1;37;97;47m%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%S[0;1;30;90;47m:[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;34;40m [0m
[0;37;5;47;107m     . [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%%S%%S%%%S%%S%%S%S%S%%S%%S%%%%%%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;34;40m [0m
[0;37;5;47;107m  .    [0;1;30;90;47m8[0;37;5;47;107m.[0;1;37;97;47m%[0;32;5;42;102m8[0;1;32;92;42m8 [0;1;37;97;47m%S%%S%%%%%S%%%%%[0;33;5;40;100m%[0;30;5;40;100m@[0;35;5;40;100m%[0;30;5;40;100m@[0;32;5;40;100m%[0;31;5;40;100mS[0;34;5;40;100mS[0;32;5;40;100mX[0;31;5;40;100mS[0;34;5;40;100mS[0;1;37;97;47mt%%[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;34;40m [0m
[0;37;5;47;107m   .  .[0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47mS%%S%%%%%%S%S%%%S%St;%t%;%;ttt%S%[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;1;30;90;47m8[0;34;40m [0m
[0;37;5;47;107m     [0;1;37;97;47m%%[0;37;5;47;107mX[0;1;37;97;47m%%%%%%S%S%%%%%%S%%%%%%S%S%%%%%%%%%[0;32;5;40;100m%[0;37;5;40;100m8[0;1;30;90;47m8[0;34;5;40;100mS[0;37;5;40;100m8[0;37;5;47;107m [0m
[0;37;5;47;107m . [0;1;37;97;47m%%[0;37;5;47;107m@@[0;1;37;97;47m%[0;35;5;40;100m%[0;37;5;40;100m@[0;37;5;47;107m [0;1;37;97;47m%[0;36;5;40;100mt[0;37;5;40;100m@[0;37;5;47;107m [0;1;37;97;47m%[0;31;5;40;100m%[0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%[0;36;5;40;100m%[0;37;5;40;100m@[0;37;5;47;107m [0;1;37;97;47m%[0;35;5;40;100m%[0;37;5;40;100mX[0;37;5;47;107m [0;1;37;97;47mS[0;36;5;40;100m%[0;37;5;40;100m@[0;37;5;47;107m [0;1;37;97;47m%[0;34;5;40;100mS[0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%[0;36;5;40;100m%[0;37;5;40;100mX[0;37;5;47;107mX[0;1;37;97;47m%[0;1;30;90;47m:[0;37;5;40;100m8[0;31;40m [0;35;5;40;100mS[0;37;5;40;100mX[0;37;5;47;107m   [0m
[0;37;5;47;107m  [0;37;5;40;100m8[0;37;5;47;107m [0;1;37;97;47m%[0;37;5;47;107m [0;1;30;90;47m8[0;32;40m [0;37;5;47;107m; [0;1;30;90;47m8[0;31;40m [0;37;5;47;107m; [0;1;30;90;47m8[0;32;40m [0;37;5;47;107m. [0;37;5;40;100m8[0;31;40m [0;37;5;47;107m:.[0;1;30;90;47m8[0;32;40m [0;37;5;47;107m; [0;1;30;90;47m8[0;31;40m [0;37;5;47;107m; [0;37;5;40;100m8[0;31;40m [0;37;5;47;107m  [0;37;5;40;100m8[0;31;40m [0;37;5;47;107m;[0;1;37;97;47m%S[0;37;5;40;100m8[0;1;30;90;47m8[0;37;5;40;100m8[0;31;40m [0;37;5;47;107m;   .[0m
[0;1;37;97;47m%%[0;37;5;47;107mX[0;1;37;97;47m%[0;37;5;47;107m@[0;1;30;90;47m;[0;36;5;40;100m [0;37;5;47;107m@@[0;1;30;90;47m;[0;33;5;40;100m [0;37;5;47;107mX@[0;1;30;90;47m;[0;33;5;40;100m [0;37;5;47;107m@@[0;1;30;90;47m:[0;36;5;40;100m [0;37;5;47;107mX@[0;1;30;90;47m;[0;33;5;40;100m [0;37;5;47;107mX@@[0;33;5;40;100m [0;37;5;47;107mX@[0;1;30;90;47m;[0;33;5;40;100m [0;37;5;47;107mS@[0;1;30;90;47m:[0;33;5;40;100m [0;37;5;47;107mX[0;1;37;97;47mS[0;1;30;90;47m;8[0;37;5;40;100m8[0;33;5;40;100m%[0;37;5;40;100m@[0;37;5;47;107m  .   [0m
[0;1;30;90;47m8[0;37;5;47;107m.@@@XX@@@X@@@X@@XX@@XX@@@X@@XX@@@X@[0;1;30;90;47m8[0;37;5;40;100m8[0;33;5;40;100m%[0;37;5;40;100mX[0;37;5;47;107m:    .  [0m
[0;1;30;90;47m8[0;30;5;40;100mS[0;36;5;40;100m%[0;31;5;40;100m@[0;30;5;40;100mS[0;32;5;40;100mS[0;34;5;40;100mS[0;30;5;40;100mS[0;33;5;40;100mS[0;30;5;40;100m@[0;36;5;40;100m%[0;30;5;40;100m@[0;31;5;40;100m%[0;30;5;40;100mS[0;36;5;40;100m%[0;30;5;40;100m@[0;31;5;40;100m%[0;30;5;40;100mS[0;36;5;40;100mS[0;30;5;40;100m@[0;31;5;40;100mS[0;30;5;40;100mS[0;32;5;40;100mS[0;31;5;40;100mS[0;34;5;40;100mS[0;32;5;40;100mX[0;31;5;40;100mX[0;30;5;40;100mS[0;34;5;40;100mS[0;33;5;40;100m8[0;30;5;40;100m8[0;35;5;40;100m%[0;30;5;40;100m@[0;33;5;40;100mS[0;30;5;40;100m@[0;34;5;40;100m%[0;31;5;40;100mS[0;37;5;40;100m8[0;37;5;47;107m;  .     .[0m

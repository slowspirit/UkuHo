var chordsArray = {
//group C
	chord_C:     "Chord C     <br><br>A &nbsp||---|---|-o-|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Cm:    "Chord Cm    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g	   O||---|---|---|---|<br>",
	chord_Csus2: "Chord Csus2 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Csus4: "Chord Csus4 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_C6:    "Chord C6    <br><br>A	    O||---|---|---|---|<br>E	 O||---|---|---|---|<br>C	  O||---|---|---|---|<br>g     O||---|---|---|---|<br>",
	chord_Cm6:   "Chord Cm6   <br><br>A     O||---|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g     O||---|---|---|---|<br>",
	chord_C7:    "Chord C7    <br><br>A &nbsp||-o-|---|---|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Cm7:   "Chord Cm7   <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Cmaj7: "Chord Cmaj7 <br><br>A &nbsp||-o-|---|---|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_C7sus4:"Chord C7sus4<br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_C9:    "Chord C9    <br><br>A &nbsp||---|---|-o-|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Cm9:   "Chord Cm9   <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|---|-o-|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Caug:  "Chord Caug  <br><br>A &nbsp||---|---|-o-|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Cdim:  "Chord Cdim  <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",

//group C#/Db
	chord_Db:     "Chord D<sub>b</sub>(C#)      	 <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbm:    "Chord D<sub>b</sub>m(C#m)    	 <br><br>A &nbsp||---|---|---|-o-|<br>E     O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbsus2: "Chord D<sub>b</sub>sus2(C#sus2)  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbsus4: "Chord D<sub>b</sub>sus4(C#sus4)  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Db6:    "Chord D<sub>b</sub>6(C#6)        <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbm6:   "Chord D<sub>b</sub>m6(C#m6)      <br><br>A &nbsp||-o-|---|---|---|<br>E 	O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Db7:    "Chord D<sub>b</sub>7(C#7)     	 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbm7:   "Chord D<sub>b</sub>m7(C#m7)      <br><br>A &nbsp||---|-o-|---|---|<br>E 	O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbmaj7: "Chord D<sub>b</sub>maj7(C#maj7)  <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Db7sus4:"Chord D<sub>b</sub>7sus4(C#7sus4)<br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Db9:    "Chord D<sub>b</sub>9(C#9)     	 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5",
	chord_Dbm9:   "Chord D<sub>b</sub>m9(C#m9)      <br><br>A &nbsp||---|-o-|---|---|<br>E 	O||---|---|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Dbaug:  "Chord D<sub>b</sub>aug(C#aug)    <br><br>A 	   O||---|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dbdim:  "Chord D<sub>b</sub>dim(C#dim)    <br><br>A &nbsp||-o-|---|---|---|<br>E 	O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	  O||---|---|---|---|<br>",

//group D
	chord_D:     "Chord D     <br><br>A     O||---|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dm:    "Chord Dm    <br><br>A 	O||---|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dsus2: "Chord Dsus2 <br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dsus4: "Chord Dsus4 <br><br>A 	O||---|---|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_D6:    "Chord D6    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dm6:   "Chord Dm6   <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_D7:    "Chord D7    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dm7:   "Chord Dm7   <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dmaj7: "Chord Dmaj7 <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_D7sus4:"Chord D7sus4<br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_D9:    "Chord D9    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Dm9:   "Chord Dm9   <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Daug:  "Chord Daug  <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Ddim:  "Chord Ddim  <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",

//group D#/Eb
	chord_Eb:     "Chord E<sub>b</sub>(D#)      	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g 	  O||---|---|---|---|<br>",
	chord_Ebm:    "Chord E<sub>b</sub>m(D#m)    	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Ebsus2: "Chord E<sub>b</sub>sus2(D#sus2)  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Ebsus4: "Chord E<sub>b</sub>sus4(D#sus4)  <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Eb6:    "Chord E<sub>b</sub>6(D#6)        <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Ebm6:   "Chord E<sub>b</sub>m6(D#m6)      <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C 	 O||---|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Eb7:    "Chord E<sub>b</sub>7(D#7)     	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||-o-|---|---|---|<br>g 	  O||---|---|---|---|<br>",
	chord_Ebm7:   "Chord E<sub>b</sub>m7(D#m7)      <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Ebmaj7: "Chord E<sub>b</sub>maj7(D#maj7)  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Eb7sus4:"Chord E<sub>b</sub>7sus4(D#7sus4)<br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Eb9:    "Chord E<sub>b</sub>9(D#9)     	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	  O||---|---|---|---|<br>",
	chord_Ebm9:   "Chord E<sub>b</sub>m9(D#m9)      <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2",
	chord_Ebaug:  "Chord E<sub>b</sub>aug(D#aug)    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g 	  O||---|---|---|---|<br>",
	chord_Ebdim:  "Chord E<sub>b</sub>dim(D#dim)    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",

//group E
	chord_E:     "Chord E     <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Em:    "Chord Em    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Esus2: "Chord Esus2 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Esus4: "Chord Esus4 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2",
	chord_E6:    "Chord E6    <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Em6:   "Chord Em6   <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_E7:    "Chord E7    <br><br>A &nbsp||---|-o-|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Em7:   "Chord Em7   <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Emaj7: "Chord Emaj7 <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4",
	chord_E7sus4:"Chord E7sus4<br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5",
	chord_E9:    "Chord E9    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Em9:   "Chord Em9   <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Eaug:  "Chord Eaug  <br><br>A &nbsp||---|---|-o-|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Edim:  "Chord Edim  <br><br>A &nbsp||-o-|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	   O||---|---|---|---|<br>",

//group F
	chord_F:     "Chord F     <br><br>A 	O||---|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C 	  O||---|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Fm:    "Chord Fm    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C 	  O||---|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Fsus2: "Chord Fsus2 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Fsus4: "Chord Fsus4 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C 	  O||---|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_F6:    "Chord F6    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5",
	chord_Fm6:   "Chord Fm6   <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_F7:    "Chord F7    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Fm7:   "Chord Fm7   <br><br>A &nbsp||---|---|--|-o-|<br>E &nbsp||--|-o-|---|---|<br>C &nbsp||---|--|-o-|---|<br>g &nbsp||---|--|-o-|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4",
	chord_Fmaj7: "Chord Fmaj7 <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5",
	chord_F7sus4:"Chord F7sus4<br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5",
	chord_F9:    "Chord F9    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Fm9:   "Chord Fm9   <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Faug:  "Chord Faug  <br><br>A 	O||---|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Fdim:  "Chord Fdim  <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	
//group F#/Gb
	chord_Gb:     "Chord G<sub>b</sub>(F#)      	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Gbm:    "Chord G<sub>b</sub>m(F#m)    	 <br><br>A 	   O||---|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Gbsus2: "Chord G<sub>b</sub>sus2(F#sus2)  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Gbsus4: "Chord G<sub>b</sub>sus4(F#sus4)  <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Gb6:    "Chord G<sub>b</sub>6(F#6)        <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6",
	chord_Gbm6:   "Chord G<sub>b</sub>m6(F#m6)      <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Gb7:    "Chord G<sub>b</sub>7(F#7)     	 <br><br>A &nbsp||-o-|---|---|---|<br>E    O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Gbm7:   "Chord G<sub>b</sub>m7(F#m7)      <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5",
	chord_Gbmaj7: "Chord G<sub>b</sub>maj7(F#maj7)  <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Gb7sus4:"Chord G<sub>b</sub>7sus4(F#7sus4)<br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7",
	chord_Gb9:    "Chord G<sub>b</sub>9(F#9)     	 <br><br>A &nbsp||-o-|---|---|---|<br>E 	O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Gbm9:   "Chord G<sub>b</sub>m9(F#m9)      <br><br>A 	   O||---|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Gbaug:  "Chord G<sub>b</sub>aug(F#aug)    <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Gbdim:  "Chord G<sub>b</sub>dim(F#dim)    <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",	

//group G
	chord_G:     "Chord G     <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gm:    "Chord Gm    <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gsus2: "Chord Gsus2 <br><br>A 	O||---|---|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gsus4: "Chord Gsus4 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_G6:    "Chord G6    <br><br>A &nbsp||---|-o-|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gm6:   "Chord Gm6   <br><br>A &nbsp||-o-|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_G7:    "Chord G7    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gm7:   "Chord Gm7   <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gmaj7: "Chord Gmaj7 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_G7sus4:"Chord G7sus4<br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_G9:    "Chord G9    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Gm9:   "Chord Gm9   <br><br>A 	O||---|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Gaug:  "Chord Gaug  <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Gdim:  "Chord Gdim  <br><br>A &nbsp||-o-|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	   O||---|---|---|---|<br>",

//group G#/Ab
	chord_Ab:     "Chord A<sub>b</sub>(G#)      	 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|---|-o-|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Abm:    "Chord A<sub>b</sub>m(G#m)    	 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Absus2: "Chord A<sub>b</sub>sus2(G#sus2)  <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Absus4: "Chord A<sub>b</sub>sus4(G#sus4)  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Ab6:    "Chord A<sub>b</sub>6(G#6)        <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Abm6:   "Chord A<sub>b</sub>m6(G#m6)      <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Ab7:    "Chord A<sub>b</sub>7(G#7)     	 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Abm7:   "Chord A<sub>b</sub>m7(G#m7)      <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4",
	chord_Abmaj7: "Chord A<sub>b</sub>maj7(G#maj7)  <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Ab7sus4:"Chord A<sub>b</sub>7sus4(G#7sus4)<br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Ab9:    "Chord A<sub>b</sub>9(G#9)     	 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Abm9:   "Chord A<sub>b</sub>m9(G#m9)      <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Abaug:  "Chord A<sub>b</sub>aug(G#aug)    <br><br>A &nbsp||---|---|-o-|---|<br>E 	O||---|---|---|---|<br>C 	 O||---|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Abdim:  "Chord A<sub>b</sub>dim(G#dim)    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",	


//group A
	chord_A:     "Chord A     <br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Am:    "Chord Am    <br><br>A  	O||---|---|---|---|<br>E  	 O||---|---|---|---|<br>C  	  O||---|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Asus2: "Chord Asus2 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|---|---|-o-|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Asus4: "Chord Asus4 <br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_A6:    "Chord A6    <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Am6:   "Chord Am6   <br><br>A 	O||---|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C 	  O||---|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_A7:    "Chord A7    <br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Am7:   "Chord Am7   <br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Amaj7: "Chord Amaj7 <br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_A7sus4:"Chord A7sus4<br><br>A 	O||---|---|---|---|<br>E 	 O||---|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_A9:    "Chord A9    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Am9:   "Chord Am9   <br><br>A &nbsp||---|-o-|---|---|<br>E 	 O||---|---|---|---|<br>C 	  O||---|---|---|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Aaug:  "Chord Aaug  <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Adim:  "Chord Adim  <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",

//group A#/Bb
	chord_Bb:     "Chord B<sub>b</sub>(A#)      	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Bbm:    "Chord B<sub>b</sub>m(A#m)    	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Bbsus2: "Chord B<sub>b</sub>sus2(A#sus2)  <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C 	 O||---|---|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Bbsus4: "Chord B<sub>b</sub>sus4(A#sus4)  <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Bb6:    "Chord B<sub>b</sub>6(A#6)        <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3",
	chord_Bbm6:   "Chord B<sub>b</sub>m6(A#m6)      <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	  O||---|---|---|---|<br>",
	chord_Bb7:    "Chord B<sub>b</sub>7(A#7)     	 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Bbm7:   "Chord B<sub>b</sub>m7(A#m7)      <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Bbmaj7: "Chord B<sub>b</sub>maj7(A#maj7)  <br><br>A 	   O||---|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Bb7sus4:"Chord B<sub>b</sub>7sus4(A#7sus4)<br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Bb9:    "Chord B<sub>b</sub>9(A#9)     	 <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Bbm9:   "Chord B<sub>b</sub>m9(A#m9)      <br><br>A &nbsp||---|---|-o-|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_Bbaug:  "Chord B<sub>b</sub>aug(A#aug)    <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|-o-|---|<br>",
	chord_Bbdim:  "Chord B<sub>b</sub>dim(A#dim)    <br><br>A &nbsp||-o-|---|---|---|<br>E 	O||---|---|---|---|<br>C &nbsp||-o-|---|---|---|<br>g 	  O||---|---|---|---|<br>",	

//group B
	chord_B:     "Chord B     <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Bm:    "Chord Bm    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Bsus2: "Chord Bsus2 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||-o-|---|---|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_Bsus4: "Chord Bsus4 <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_B6:    "Chord B6    <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4",
	chord_Bm6:   "Chord Bm6   <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",
	chord_B7:    "Chord B7    <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Bm7:   "Chord Bm7   <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Bmaj7: "Chord Bmaj7 <br><br>A &nbsp||-o-|---|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|---|---|-o-|<br>",
	chord_B7sus4:"Chord B7sus4<br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|---|-o-|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_B9:    "Chord B9    <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|---|-o-|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Bm9:   "Chord Bm9   <br><br>A &nbsp||---|---|---|-o-|<br>E &nbsp||---|-o-|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||---|-o-|---|---|<br>",
	chord_Baug:  "Chord Baug  <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||---|---|-o-|---|<br>C &nbsp||---|---|-o-|---|<br>g 	   O||---|---|---|---|<br>",
	chord_Bdim:  "Chord Bdim  <br><br>A &nbsp||---|-o-|---|---|<br>E &nbsp||-o-|---|---|---|<br>C &nbsp||---|-o-|---|---|<br>g &nbsp||-o-|---|---|---|<br>",

};

var input = function(){
    var usersInput = document.getElementById("input");
}

var exploreSelection = function(){
    var selectedMeaning1 = document.getElementById("list_of_chords1");
    var selectedMeaning2 = document.getElementById("list_of_chords2");
    var wholeChordName = "chord_" + selectedMeaning1.value + selectedMeaning2.value;
    console.log(wholeChordName);

	if(wholeChordName !== 'chord_' || (selectedMeaning1 !=='' && selectedMeaning2 !=='')) {
		var area = document.getElementById("showedChord");
		area.innerHTML = chordsArray[wholeChordName];
		area.style.display = "inline";
	}	
    return chordsArray[wholeChordName];
};

var hideChord = function(){
	var hiddenElement = document.getElementById("showedChord");
	console.log(hiddenElement);
	hiddenElement.style.display = "none";
};

var copying = function(){
	if (exploreSelection() !== undefined){
		var safezone = document.getElementById("safezone");
		var copiedElement = document.createElement('span');
		copiedElement.innerHTML = exploreSelection();
		safezone.appendChild(copiedElement);
		console.log(exploreSelection());
	}
	
};
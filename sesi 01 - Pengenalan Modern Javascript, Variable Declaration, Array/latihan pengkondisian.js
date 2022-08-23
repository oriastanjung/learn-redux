let present = 15;
let grade = 85;

/*
    Jika present kurang dari 10 maka siswa tidak lulus
    Jika grade diatas 80 cetak siswa lulus dengan nilai A
    Jika grade diatas 70 cetak siswa lulus dengan nilai B
    Jika grade diatas 60 cetak siswa lulus dengan nilai C
    Jika grade diatas 50 cetak siswa hanya bisa lulus jika presensi 15
    Jika grade dibawah 50 cetak siswa tidak lulus

*/

if (present < 10) {
  console.log("siswa tidak lulus");
} else {
  if (grade >= 80) {
    console.log("siswa lulus dengan nilai A");
  } else if (grade >= 70 && grade < 80) {
    console.log("siswa lulus dengan nilai B");
  } else if (grade >= 60 && grade < 70) {
    console.log("siswa lulus dengan nilai C");
  } else if (grade >= 50 && grade < 60) {
    if (present >= 15) {
      console.log("siswa lulus dengan nilai C");
    } else {
      console.log("siswa tidak lulus");
    }
  } else {
    console.log("siswa tidak lulus");
  }
}

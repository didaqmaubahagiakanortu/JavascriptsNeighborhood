import { Injectable } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';

@Injectable()
export class SiswaService {

  private siswas: CreateSiswaDto[] = [
    {nisn: '1', nama: 'Qurnaen Didaq', alamat: 'Malang', umur: 16}
  ]

  create(createSiswaDto: CreateSiswaDto) {
    this.siswas.push(createSiswaDto);
    return this.siswas;
  }

  findAll() {
    return this.siswas;
  }

  findOne(id: number) {
    return this.siswas.findLast((x) => id === parseInt(x.nisn));
  }

  update(id: number, updateSiswaDto: UpdateSiswaDto) {
    const index = this.siswas.findLastIndex((x) => id === parseInt(x.nisn));
    if (updateSiswaDto.nisn !== undefined) {
      this.siswas[index].nisn = updateSiswaDto.nisn;
    }
    if (updateSiswaDto.nama !== undefined) { 
      this.siswas[index].nama = updateSiswaDto.nama;
    }
    if (updateSiswaDto.alamat !== undefined) {
      this.siswas[index].alamat = updateSiswaDto.alamat;
    }
    if (updateSiswaDto.umur !== undefined) {
      this.siswas[index].umur = updateSiswaDto.umur;
    }
    return this.siswas;
  }

  remove(id: number) {
    this.siswas.splice(this.siswas.findLastIndex((x) => id === parseInt(x.nisn) * -1), 1);
    return this.siswas;
  }
}

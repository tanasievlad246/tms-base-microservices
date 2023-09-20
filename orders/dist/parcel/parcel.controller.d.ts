import { ParcelService } from './parcel.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
export declare class ParcelController {
    private readonly parcelService;
    constructor(parcelService: ParcelService);
    create(createParcelDto: CreateParcelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateParcelDto: UpdateParcelDto): string;
    remove(id: string): string;
}

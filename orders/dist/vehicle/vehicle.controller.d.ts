import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    create(createVehicleDto: CreateVehicleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVehicleDto: UpdateVehicleDto): string;
    remove(id: string): string;
}

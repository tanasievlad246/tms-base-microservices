import { TransformOptions } from 'class-transformer';
import { ValidatorOptions } from 'class-validator';
export interface ValidationPipeOptions extends ValidatorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: string[]) => any;
    transformOptions?: TransformOptions;
}

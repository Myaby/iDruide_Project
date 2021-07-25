import { CanActivate, Guard, ExecutionContext } from '@nestjs/common';

@Guard()
export class EtablissementsGuard implements CanActivate {
    canActivate(request: any, context: ExecutionContext): boolean {
        return true;
    }
}

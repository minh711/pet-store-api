import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet.input';

@Resolver(() => Pet) // of => Pet
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet]) // returns => [Pet]
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(() => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput);
  }
}

power_pellet_eaten = False
ghosts = 4
while True:
  print("Ghosts remaining: {}".format(ghosts))

  if power_pellet_eaten == False:
    print('Pac-Man eats the power pellet.')
    power_pellet_eaten = True
  elif ghosts > 0:
    print('Pac-Man eats a ghost.')
    ghosts -= 1
  else:
    break

print('Pac-Man goes home after a long day in the maze.')

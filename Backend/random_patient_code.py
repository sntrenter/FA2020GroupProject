import random
import string
def get_random_patient_code():
  _letters = string.ascii_uppercase.replace("O", '')
  prefix = random.sample(_letters, 3)
  suffix = random.sample(range(1, 10), 3)
  code_list = [str(x) for x in prefix + suffix]
  code = ''.join(code_list)
  return code

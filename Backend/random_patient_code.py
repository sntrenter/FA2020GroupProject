import random
import string
def get_random_patient_code():
  prefix = random.sample(string.ascii_uppercase, 3)
  suffix = random.sample(range(10), 3)
  code_list = [str(x) for x in prefix + suffix]
  code = ''.join(code_list)
  return code

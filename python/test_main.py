import unittest
from main import add


class AddTest(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(1, 2), 3)

    def test_add_with_non_number(self):
        self.assertEqual(add(1), 1)

import unittest
from main import add


class AddTest(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(1, 2), 3)

    def test_add_2(self):
        self.assertEqual(add(3, 2), 5)

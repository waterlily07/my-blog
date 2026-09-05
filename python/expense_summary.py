"""Group a few daily expenses to practise dictionaries and loops."""


def summarise_expenses(expenses):
    """Return totals grouped by category."""
    summary = {}
    for category, amount in expenses:
        summary[category] = summary.get(category, 0) + amount
    return summary


if __name__ == "__main__":
    print(summarise_expenses([("food", 120), ("travel", 60), ("food", 80)]))

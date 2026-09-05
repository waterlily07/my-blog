"""Small weighted CGPA calculator for practising Python fundamentals."""


def calculate_cgpa(subjects):
    """Return the credit-weighted average for (name, grade, credits) tuples."""
    valid_subjects = [(name, grade, credits) for name, grade, credits in subjects if 0 <= grade <= 10]
    total_credits = sum(credits for _, _, credits in valid_subjects)
    total_points = sum(grade * credits for _, grade, credits in valid_subjects)
    return round(total_points / total_credits, 2) if total_credits else 0.0


if __name__ == "__main__":
    sample_subjects = [("Programming", 8, 4), ("Mathematics", 7, 4), ("Communication", 9, 3)]
    print(f"Estimated CGPA: {calculate_cgpa(sample_subjects):.2f}")
